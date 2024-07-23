"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ children, href = "", activeClass }) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={path.startsWith(href) ? activeClass : undefined}
    >
      {children}
    </Link>
  );
}
