# PR Title

Add Supabase-backed portfolio content and admin dashboard

# PR Description

## Summary

- Connects the portfolio to Supabase Postgres through Drizzle ORM.
- Adds database-backed hero image, experience, education, certification, and testimonial content.
- Keeps static content fallbacks for public pages when database content is unavailable.
- Adds a Supabase Auth-protected `/admin` area for content management.
- Makes the contact form persist submissions and send email notifications.

## Database

- Adds Drizzle schema for:
  - `hero_images`
  - `experiences`
  - `educations`
  - `certifications`
  - `testimonials`
  - `contact_submissions`
- Adds an initial Supabase SQL migration with current portfolio data.
- Adds contact submission storage.
- Tunes Postgres client settings for Supabase pooler usage.

## Public Site

- Fetches homepage content from Supabase at runtime.
- Falls back to existing static content when database reads fail or are unavailable.
- Keeps the existing site layout and visual structure intact.
- Supports Supabase-hosted remote hero images.

## Admin

- Adds `/admin` redirect route.
- Adds `/admin/login` with Supabase email/password authentication.
- Adds `/admin/dashboard` for editing:
  - Hero image details
  - Experiences
  - Education
  - Certifications
  - Testimonials
- Shows recent contact submissions in the dashboard.
- Adds `npm run admin:create` to create or reset the first admin user through Supabase Auth.

## Contact Form

- Replaces fake submit delay with `/api/contact`.
- Validates form submissions server-side.
- Stores contact submissions in Supabase Postgres.
- Sends email notifications through Resend.
- Supports multiple comma-separated email recipients.
- Removes Twilio/SMS integration to avoid paid SMS dependency.

## Configuration

- Adds Supabase publishable key support.
- Documents required environment variables.
- Adds Resend sender configuration.
- Adds Next image quality and Supabase storage image configuration.

## Verification

- Ran `npm run lint`.
- Ran production build during implementation.
- Verified Supabase database connection and migration application locally.
- Verified admin auth bootstrap script can reset the configured admin user.
