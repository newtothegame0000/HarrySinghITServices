/*
  # Create contact_submissions table

  ## Summary
  Creates a table to store contact form submissions from the website.

  ## New Tables
  - `contact_submissions`
    - `id` (uuid, primary key) - unique identifier
    - `first_name` (text) - submitter's first name
    - `last_name` (text) - submitter's last name
    - `email` (text) - submitter's email address
    - `phone` (text, optional) - submitter's phone number
    - `service` (text) - requested service type
    - `message` (text) - project description/message
    - `created_at` (timestamptz) - submission timestamp

  ## Security
  - RLS enabled on `contact_submissions`
  - Anonymous users can INSERT (to allow form submission without auth)
  - No SELECT policy for public (data is private, admin-only via service role)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL DEFAULT '',
  last_name text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  phone text DEFAULT '',
  service text NOT NULL DEFAULT '',
  message text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);
