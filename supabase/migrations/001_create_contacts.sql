-- Create contacts table to store form submissions
CREATE TABLE IF NOT EXISTS public.contacts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts only (no read/update/delete from frontend)
CREATE POLICY "Allow anonymous inserts" ON public.contacts
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Only authenticated/service role can read contacts
CREATE POLICY "Allow service role to read" ON public.contacts
    FOR SELECT
    TO service_role
    USING (true);
