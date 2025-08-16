import React from "react";
import { twMerge } from "tailwind-merge";
type HProps = {
  children: React.ReactNode;
  className?: string;
};

export default function H1({ children, className }: HProps) {
  return (
    <h1
      className={twMerge(
        "text-4xl lg:text-6xl font-bold tracking-tight",
        className
      )}
    >
      {children}
    </h1>
  );
}
