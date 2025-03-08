document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('.submit-btn');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      
      // Get form values
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
      };

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          throw new Error('Failed to send message');
        }

        // Show success message
        showFormStatus('Message sent successfully! We will get back to you soon.', 'success');
        contactForm.reset();
      } catch (error) {
        // Show error message
        showFormStatus('Failed to send message. Please try again later.', 'error');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit';
      }
    });
  }
});

function showFormStatus(message, type) {
  // Remove any existing status message
  const existingStatus = document.querySelector('.form-status');
  if (existingStatus) {
    existingStatus.remove();
  }

  // Create new status message
  const statusDiv = document.createElement('div');
  statusDiv.className = `form-status ${type}`;
  statusDiv.textContent = message;

  // Insert after form
  const contactForm = document.getElementById('contactForm');
  contactForm.parentNode.insertBefore(statusDiv, contactForm.nextSibling);

  // Remove status message after 5 seconds
  setTimeout(() => {
    statusDiv.remove();
  }, 5000);
}