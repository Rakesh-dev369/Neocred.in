-- Purpose: Add user_stage field to track onboarding status
-- Create the profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  
  -- Basic user info
  full_name text,
  email text UNIQUE,
  
  -- User onboarding & personalization
  goal text,                      -- e.g. "Improve Credit", "Save More", etc.
  user_stage text DEFAULT 'new',  -- new | active | pro (future use)
  
  -- Optional metadata
  avatar_url text,
  phone text,
  country text DEFAULT 'India',
  
  -- Timestamps
  created_at timestamp with time zone DEFAULT timezone('utc', now()),
  updated_at timestamp with time zone DEFAULT timezone('utc', now())
);

-- Enable RLS (Row Level Security)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Allow users to view & edit only their own profile
CREATE POLICY "Users can view own profile" 
  ON public.profiles 
  FOR SELECT 
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" 
  ON public.profiles 
  FOR UPDATE 
  USING (auth.uid() = id);

-- Insert trigger: when new user signs up, create a profile
CREATE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (new.id, new.email, new.raw_user_meta_data->>'full_name');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
