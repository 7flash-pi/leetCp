'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsFillBugFill } from "react-icons/bs";
import classNames from "classnames";

type Props = {};

const Navbar = (props: Props) => {

    const pathName=usePathname();
    console.log({pathName})

  const navLink = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <BsFillBugFill />
      </Link>
      <ul className="flex space-x-6">
        {navLink.map((link, index) => (
          <li
            key={index}
            className={classNames({
                'text-zinc-900': link.href===pathName,
                'text-zinc-500' :link.href !== pathName,
                'hover:text-zinc-800 transition-colors':true
            })}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
