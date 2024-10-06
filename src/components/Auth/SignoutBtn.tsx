"use client";

import React from 'react';
import { signOutAction } from '../../actions/signout';

const SignoutBtn = () => {
  const handleSignOut = async () => {
    try {
      await signOutAction();
      // Optionally redirect or show a message
      window.location.reload(); // This refreshes the page to reflect the signed-out state
    } catch (error) {
      console.error('Error signing out:', error);
      // Optionally show an error message to the user
    }
  };

  return (
    <button onClick={handleSignOut} className="sign-out-button">
      Sign Out
    </button>
  );
}

export default SignoutBtn;
