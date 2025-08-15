"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Searchform() {
  const [searchText, setSearchTex] = useState("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchText) return;

    router.push(`/events/${searchText}`);
  };
  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px] m-auto">
      <input
        value={searchText}
        onChange={(e) => setSearchTex(e.target.value)}
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-[#a4f839]/50 transition focus:ring-2 focus:bg-white/10"
        type="text"
        placeholder="search events in any city..."
        spellCheck={false}
      />
    </form>
  );
}
