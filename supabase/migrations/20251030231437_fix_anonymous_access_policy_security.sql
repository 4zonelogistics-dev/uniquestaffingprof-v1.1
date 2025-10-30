/*
  # Fix Anonymous Access Policy Security

  1. Security Issue
    - Current policy uses TO public which includes both anon and authenticated roles
    - Supabase best practice recommends explicitly targeting TO anon for anonymous access
    - This resolves the security advisor warning about anonymous sign-ins

  2. Changes
    - Drop existing public insert policy
    - Create new policy specifically targeting anon role for INSERT operations
    - Maintains same functionality but follows Supabase security guidelines
*/

-- Drop the existing policy that uses TO public
DROP POLICY IF EXISTS "Public can submit contact forms" ON contact_submissions;

-- Create new policy specifically for anonymous users
-- This explicitly targets the anon role as recommended by Supabase
CREATE POLICY "Anonymous users can submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);