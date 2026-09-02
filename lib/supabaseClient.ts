import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://jbmilmqxmezgwhqmpvor.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpibWlsbXF4bWV6Z3docW1wdm9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgzNjMxOTAsImV4cCI6MjEwMzkzOTE5MH0._XprXLdKe98ogTmgnTOeec9DA99JDL-YFLksPzNvw2A";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
