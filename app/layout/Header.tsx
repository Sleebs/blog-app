"use client";
import React from "react";
import Link from "next/link";
import { Button as AuthButton } from "../auth/Button";
import { SessionProvider } from "next-auth/react";

type Propr = {};

const Header = (propr: Propr) => {
  return (
    <SessionProvider>
      <div className=' border-b  flex justify-between '>
        <Link href={`/`} className='px-2 py-2 text-4xl'>
          Logo
        </Link>
        <AuthButton className='text-white bg-black px-4 py-4 cursor-pointer' />
      </div>
    </SessionProvider>
  );
};

export default Header;
