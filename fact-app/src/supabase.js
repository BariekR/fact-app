import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cawvsutygkrgligfpfcu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhd3ZzdXR5Z2tyZ2xpZ2ZwZmN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU0OTg0MjcsImV4cCI6MjAyMTA3NDQyN30.LH5REvDnZb3qR4G5gKvy3tVhEn4uGOfCRb1cbOKvnTw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
