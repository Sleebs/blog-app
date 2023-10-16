"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

type Props = {
  className?: string;
};

export const Button = (props: Props) => {
  const { data: session, status } = useSession();
  if (status === "loading") return <div>Loading ...</div>;

  if (session) {
    <button
      onClick={(e) => {
        e.preventDefault();
        signOut();
      }}
      className={`${props.className}`}
    >
      SignOut
    </button>;
  }

  return (
    <button
      onClick={(e) => {
        signIn();
      }}
      className={`${props.className}`}
    >
      Sign in!
    </button>
  );
};
