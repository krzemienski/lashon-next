# Contact Form Email Integration

This document explains how the contact form on the Lashon website is configured to send emails.

## Overview

Since the Lashon website is hosted on GitHub Pages (a static hosting service), we cannot use traditional server-side API endpoints to process form submissions. Instead, we use [EmailJS](https://www.emailjs.com/), a client-side email service that enables sending emails directly from JavaScript without server-side code.

## Configuration

1. Create an account on [EmailJS](https://www.emailjs.com/)
2. Set up an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Configure the necessary IDs in the code

## Implementation

The contact form is implemented in `src/components/contact/ContactForm.tsx`. When a user submits the form, EmailJS is used to send the form data to the specified email address (Lashonbookedit@gmail.com).

## Usage

1. Users fill out the contact form (name, email, message)
2. On submission, the form data is sent to EmailJS
3. EmailJS delivers the message to Lashonbookedit@gmail.com
4. The user receives feedback that their message was sent successfully

## Maintenance

If you need to modify the email template or recipient, you'll need to:

1. Log in to your EmailJS account
2. Update your template or service settings
3. If changing service IDs or template IDs, update them in the code as well

## Privacy Considerations

- The EmailJS public key is exposed in the client-side code, but this is normal and secure within EmailJS's security model
- No sensitive credentials are exposed
- CORS is handled by EmailJS
