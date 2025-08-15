"use client";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";

const routes = [
  { name: "Home", path: "/" },
  { name: "All Events", path: "/events/all" },
];

export default function Header() {
  const activePathname = usePathname();

  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 px-6 sm:px-3">
      <Logo />
      <nav className="flex gap-5 h-full">
        {routes.map((route) => (
          <div key={route.path} className="relative px-1 flex items-center">
            <Link
              className={clsx(
                "text-sm transition-colors",
                activePathname === route.path
                  ? "text-white"
                  : "text-white/50 hover:text-white"
              )}
              href={route.path}
            >
              {route.name}
            </Link>

            {activePathname === route.path && (
              <motion.div
                layoutId="header-active-link"
                className="absolute left-0 right-0 h-1 bg-[#a4f839] rounded"
                style={{ bottom: -2 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </div>
        ))}
      </nav>
    </header>
  );
}
