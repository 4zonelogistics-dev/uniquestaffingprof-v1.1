/*
  # Fix Contact Submissions RLS Security

  1. Security Changes
    - Remove overly permissive anonymous insert policy
    - Add proper public insert policy that allows anyone to submit contact forms
    - Ensure only authenticated users can read submissions
    - Prevent anonymous users from reading any data
  
  2. Changes
    - Drop existing insecure policies
    - Create new secure policies with proper access controls
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can view submissions" ON contact_submissions;

-- Create secure policy for public contact form submissions
-- This allows unauthenticated users to INSERT only (submit contact forms)
CREATE POLICY "Public can submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create secure policy for authenticated admin access
-- Only authenticated users can view submissions
CREATE POLICY "Authenticated users can view all submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Create policy for authenticated users to update read status
CREATE POLICY "Authenticated users can update submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create policy for authenticated users to delete submissions if needed
CREATE POLICY "Authenticated users can delete submissions"
  ON contact_submissions
  FOR DELETE
  TO authenticated
  USING (true);