// lib/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

// Hardcoded credentials as fallback for build time
const SUPABASE_URL = 'https://fmkebuojiwsjmkjhbgka.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZta2VidW9qaXdzam1ramhiZ2thIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2OTU4OTAsImV4cCI6MjA3NjI3MTg5MH0.DvFLiRUs5MprW41jjglQjDBaMy4jaPrHF2QMVzrrsG8';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || SUPABASE_ANON_KEY,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  }
);