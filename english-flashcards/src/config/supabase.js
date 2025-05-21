import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gtynmrzfvscvwswqqpia.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0eW5tcnpmdnNjdndzd3FxcGlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwNTAyOTAsImV4cCI6MjA2MjYyNjI5MH0.qnUpw6FMEtisyXCiQyIhtIBlgRHYjlRiq_LZXatVA3U';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);