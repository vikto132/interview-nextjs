'use client';

import { SignInButton } from '@clerk/nextjs';

export const SignIn = () => {
  return (
    <SignInButton mode="modal">
      <button className="btn-shadow rounded-3xl bg-[#7BB8F1] px-10 py-1 text-lg font-bold text-white">
        Log in
      </button>
    </SignInButton>
  );
};
