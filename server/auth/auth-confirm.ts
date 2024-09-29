// server/routes/auth-confirm.ts
import { type EmailOtpType } from '@supabase/supabase-js';
import { type NextRequest } from 'next/server';
import { createClient } from '../utils/supabase/server';
import { redirect } from 'next/navigation';

// Export the GET function
export async function handleAuthConfirm(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get('token_hash');
  const type = searchParams.get('type') as EmailOtpType | null;
  const next = searchParams.get('next') ?? '/';

  if (token_hash && type) {
    const supabase = createClient();

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });
    if (!error) {
      // redirect user to the specified URL or root
      return redirect(next);
    }
  }

  // redirect to error page if verification fails
  return redirect('/error');
}
