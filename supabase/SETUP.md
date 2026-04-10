# Supabase Contact Form Setup

This guide walks you through setting up the contact form backend with Supabase.

## Prerequisites

- [Supabase CLI](https://supabase.com/docs/guides/cli) installed (`npm i -g supabase`)
- A [Supabase](https://supabase.com) account and project
- A [Resend](https://resend.com) account (free tier: 100 emails/day)

## Step 1: Create the Database Table

Run the SQL in `supabase/migrations/001_create_contacts.sql` in your Supabase dashboard:

1. Go to your Supabase project → **SQL Editor**
2. Paste the contents of `001_create_contacts.sql` and click **Run**

This creates a `contacts` table with RLS policies that allow anonymous inserts but restrict reads to the service role.

## Step 2: Deploy the Edge Function

```bash
# Login to Supabase CLI
supabase login

# Link to your project
supabase link --project-ref YOUR_PROJECT_REF

# Set the Resend API key as an Edge Function secret
supabase secrets set RESEND_API_KEY=re_your_resend_api_key_here

# Deploy the Edge Function
supabase functions deploy contact-form --no-verify-jwt
```

> **Note:** `--no-verify-jwt` allows the function to be called from your static site without authentication. The function handles its own input validation.

## Step 3: Update the Frontend

In `index.html`, replace the placeholder URL with your actual Supabase Edge Function URL:

```javascript
const SUPABASE_FUNCTION_URL = "https://YOUR_PROJECT_REF.supabase.co/functions/v1/contact-form";
```

You can find your project URL in the Supabase dashboard under **Settings → API**.

## Step 4: Configure Resend

1. Sign up at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. The free tier sends from `onboarding@resend.dev`
4. To use a custom sender domain, verify it in Resend and update the `from` field in the Edge Function

## How It Works

1. Visitor fills out the contact form on your portfolio
2. Form submits via `fetch()` to your Supabase Edge Function
3. Edge Function validates and sanitizes input
4. Contact data is stored in the `contacts` Supabase table
5. An email notification is sent to `avikumar.talaviya@gmail.com` via Resend
6. Visitor sees a success/error message

## Viewing Contacts

To view all submitted contacts, go to your Supabase dashboard → **Table Editor** → `contacts`.

## Environment Variables (Edge Function)

| Variable | Description |
|---|---|
| `SUPABASE_URL` | Auto-set by Supabase |
| `SUPABASE_SERVICE_ROLE_KEY` | Auto-set by Supabase |
| `RESEND_API_KEY` | Your Resend API key (set via `supabase secrets set`) |
