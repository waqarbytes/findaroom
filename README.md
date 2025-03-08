# Find A Room Website

A responsive real estate platform for connecting tenants with roommates and landlords.

## Setup Email Functionality

1. Create a Gmail account or use an existing one
2. Enable 2-Step Verification in your Google Account
3. Generate an App Password:
   - Go to Google Account settings
   - Navigate to Security
   - Under "2-Step Verification", click on "App passwords"
   - Generate a new app password for "Mail"
4. Update `server.js`:
   - Replace `your-email@gmail.com` with your Gmail address
   - Replace `your-app-password` with the generated app password

## Running the Application

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
node server.js
```

The website will be available at `http://localhost:3000`