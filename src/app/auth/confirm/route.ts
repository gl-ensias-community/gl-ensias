import { NextRequest } from 'next/server';
import { handleAuthConfirm } from '@/../server/auth/auth-confirm'; // Adjust the path if needed

// Expose the GET handler
export async function GET(request: NextRequest) {
    // Call the server-side logic and pass the request
    return await handleAuthConfirm(request);
  }