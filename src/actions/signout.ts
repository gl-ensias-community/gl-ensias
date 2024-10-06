'use server'

import { createClient } from '@/utils/supabase/server';

export async function signOutAction() {
    const supabase = createClient();
    
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      throw new Error(error.message);
    }
    
    return { message: 'User signed out successfully' };
  }