'use client';

import { SignUpButton } from '@clerk/nextjs';

export const SignUp = () => {
  return (
    <SignUpButton mode="modal">
      <button className="btn-shadow rounded-3xl bg-[#F5B4BB] px-6 py-1">
        Sign up
      </button>
    </SignUpButton>
  );
};
