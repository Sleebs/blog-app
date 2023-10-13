import React from "react";
import Link from "next/link";

type Propr = {};

const Header = (propr: Propr) => {
  return (
    <div className=' border-b  flex justify-between '>
      <Link href={`/`} className='px-2 py-2 text-4xl'>
        Logo
      </Link>
      <button className='text-white bg-black px-4 py-4'>Sign In</button>
    </div>
  );
};

export default Header;
