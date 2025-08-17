import React from "react";
import { twMerge } from "tailwind-merge";
type SkeletonProps = {
  className?: string;
};
export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={twMerge("animate-pulse h-4 rounded-md bg-white/10", className)}
    />
  );
}
