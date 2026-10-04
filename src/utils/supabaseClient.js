import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://zjtxbejnvzqxulkjzdkf.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqdHhiZWpudnpxeHVsa2p6ZGtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTExMDQ0NTYsImV4cCI6MjEwNjY4MDQ1Nn0.F0KqtdJf4QmbjliP009tYxXJBNR_Zr5jdZ4bPQ2BYSY';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
