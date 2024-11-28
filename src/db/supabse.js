import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = import.meta.env.VITE_SUPABSE_URL;
const supabaseKey = import.meta.env.VITE_SUPABSE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
