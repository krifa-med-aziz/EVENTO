import H1 from "@/components/H1";
import Searchform from "@/components/Search-form";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-36 px-3 text-center">
      <H1>Find events around you</H1>
      <p className="mb-12 mt-7 text-2xl lg:text-3xl text-center opacity-75">
        Browse more than{" "}
        <span className="font-bold italic underline text-[#a4f839]">
          10,000 events
        </span>{" "}
        worldwide
      </p>
      <Searchform />
      <section className="flex mt-4 gap-x-4 text-sm text-white/50">
        <p>Popular:</p>
        <div className="space-x-2">
          <Link
            className="font-bold hover:text-white transition "
            href="/events/austin"
          >
            Austin
          </Link>
          <Link
            className="font-bold hover:text-white transition "
            href="/events/seattle"
          >
            Seattle
          </Link>
        </div>
      </section>
    </main>
  );
}
