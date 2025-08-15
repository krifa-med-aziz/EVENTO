import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex gap-2 flex-col-reverse sm:flex-row justify-between mt-auto min-h-14 items-center border-t border-white/10 py-3 sm:py-0 px-6 sm:px-3 text-white/50  text-center">
      <small>
        © 2025 Made with 💙 by{" "}
        <a
          className="block sm:inline text-[#a4f839]/50 italic"
          href="https://github.com/krifa-med-aziz"
          target="_blank"
        >
          Mohamed Aziz Krifa
        </a>
      </small>
      <div className="flex gap-4 text-sm">
        <Link className=" hover:text-white transition" href="/privacy-policy">
          Privacy Policy
        </Link>
        <Link className=" hover:text-white transition" href="/terms-conditions">
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
}
