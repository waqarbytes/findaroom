<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $admin_email = "beingmohammedwaqar21@gmail.com"; // Your email (admin)
    $subject = "New Contact Form Submission";
    
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Email to Admin
    $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8\r\n";
    $body = "Name: $name\nEmail: $email\nMessage: $message";

    if (mail($admin_email, $subject, $body, $headers)) {
        echo "Your message has been sent successfully!";
    } else {
        echo "Error sending message. Please try again.";
    }

    // Auto-reply to the User
    $user_subject = "Thank You for Contacting Us - Find A Room";
    $user_message = "Dear $name,\n\nThank you for reaching out! We have received your message and will get back to you soon.\n\nBest regards,\nFind A Room Team";
    $user_headers = "From: $admin_email\r\nReply-To: $admin_email\r\nContent-Type: text/plain; charset=UTF-8\r\n";

    mail($email, $user_subject, $user_message, $user_headers); // Send confirmation to user
}
?>
