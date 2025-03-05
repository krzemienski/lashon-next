# Setting Up EmailJS for Contact Form

This document provides step-by-step instructions for setting up EmailJS to handle the contact form submissions on the Lashon website.

## Prerequisites

- An EmailJS account (you can sign up for free at [emailjs.com](https://www.emailjs.com/))
- Access to the email address you want to receive form submissions (Lashonbookedit@gmail.com)

## Setup Instructions

### 1. Create an EmailJS Account

1. Go to [emailjs.com](https://www.emailjs.com/) and sign up for a free account

### 2. Add an Email Service

1. Log in to your EmailJS dashboard
2. Go to "Email Services" in the sidebar
3. Click "Add New Service"
4. Select your email provider (Gmail, Outlook, etc.)
5. Follow the instructions to connect your email account (Lashonbookedit@gmail.com)
6. Name your service (e.g., "Lashon Contact Form")
7. Save the service

### 3. Create an Email Template

1. Go to "Email Templates" in the sidebar
2. Click "Create New Template"
3. Design your email template with the following variables:
   - `{{name}}` - The sender's name
   - `{{email}}` - The sender's email
   - `{{message}}` - The message content
4. Set the "To Email" as "Lashonbookedit@gmail.com"
5. Set an appropriate subject (e.g., "New Booking Request from {{name}}")
6. Save the template

### 4. Get Your API Keys

1. Go to "Account" in the sidebar
2. Copy your "Public Key"
3. From the "Email Services" page, copy the "Service ID" of your new service
4. From the "Email Templates" page, copy the "Template ID" of your new template

### 5. Configure Environment Variables

1. Open the `.env.local` file in the root of the project
2. Update the following variables with your actual values:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

### 6. Test the Contact Form

1. Run the website locally with `npm run dev`
2. Navigate to the contact form
3. Fill out the form with test data
4. Submit the form
5. Verify that you receive the email at Lashonbookedit@gmail.com

## Troubleshooting

If you encounter issues:

1. Check the browser console for any errors
2. Verify that all EmailJS credentials are correct in `.env.local`
3. Make sure the form field names match the variables in your EmailJS template
4. Check your EmailJS dashboard for any failed email attempts

## Notes on Free Tier Limitations

The free tier of EmailJS allows:
- 200 emails per month
- 2 email templates
- 3 email services

This should be sufficient for most small websites. If you need more, you can upgrade to a paid plan on the EmailJS website.
