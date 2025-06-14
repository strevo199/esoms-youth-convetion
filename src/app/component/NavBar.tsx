"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="p-4 px-10 bg-blue-200 shadow-md flex justify-between">
      <div className="md:flex items-center gap-2">
        <img
          src="/church.jpg"
          height={50}
          width={50}
          className=" h-8 w-8 md:h-12 md:w-12 rounded-lg "
          alt="mtn"
        />
        <h1 className=" sm:text-lg md:text-xl font-semibold">ESOMS</h1>
      </div>

      <div className="flex gap-3 items-center">
        <Link className=" font-semibold text-xl" href={"/"}>
          Home
        </Link>
        <Link className=" font-semibold text-xl" href={"/about"}>
          About
        </Link>
        <Link className=" font-semibold text-xl" href={"/about"}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
