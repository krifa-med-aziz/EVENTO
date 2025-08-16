import { TEvent } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export default function EventCard({ event }: { event: TEvent }) {
  return (
    <Link href={`/event/${event.slug}`} className="h-[380px] max-w-[500px]">
      <section className="w-full h-full relative flex flex-col bg-white/[3%] rounded-xl overflow-hidden hover:scale-105 active:scale-[1.02] transition">
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={500}
          height={280}
          className="h-[60%] object-cover"
        />
        <div className="flex flex-1 justify-center items-center flex-col">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="italic text-white/75">{event.organizerName}</p>
          <p className="text-sm text-white/50 mt-4">{event.location}</p>
        </div>
        <section className="absolute left-[12px] h-[45px] w-[45px] bg-black/30 rounded-md flex flex-col justify-center items-center">
          <p className="text-xl font-bold -mb-[5px]">
            {String(new Date(event.date).getDate()).padStart(2, "0")}
          </p>
          <p className="text-xs uppercase text-[#a4f839]">
            {new Date(event.date)
              .toLocaleString("en-US", { month: "short" })
              .toUpperCase()}
          </p>
        </section>
      </section>
    </Link>
  );
}
