// lib/supabaseClient.ts
import { createClient, SupabaseClient } from "@supabase/supabase-js";

let supabaseInstance: SupabaseClient | null = null;

function getSupabaseClient(): SupabaseClient {
  if (supabaseInstance) {
    return supabaseInstance;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://fmkebuojiwsjmkjhbgka.supabase.co';
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZta2VidW9qaXdzam1ramhiZ2thIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2OTU4OTAsImV4cCI6MjA3NjI3MTg5MH0.DvFLiRUs5MprW41jjglQjDBaMy4jaPrHF2QMVzrrsG8';

  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  });

  return supabaseInstance;
}

export const supabase = getSupabaseClient();