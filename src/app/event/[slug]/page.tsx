import H1 from "@/components/H1";
import { getEvent } from "@/util/utils";
import { Metadata } from "next";
import Image from "next/image";
type EventPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEvent(slug);
  return {
    title: event.name,
  };
}

export default async function Page({ params }: EventPageProps) {
  const { slug } = await params;
  const event = await getEvent(slug);
  return (
    <main>
      <section className="relative overflow-hidden flex justify-center items-center py-14 md:py-20 px-4">
        <Image
          className="object-cover blur-3xl z-0"
          src={event.imageUrl}
          alt="event background image"
          fill
          sizes="(max-width : 1280) 100vw , 1280px"
          quality={50}
        />
        <div className="z-1 relative gap-6 lg:gap-16 flex flex-col justify-center sm:flex-row mx-20">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
            className="rounded-xl border-2 border-white/50 object-cover mx-auto"
          />
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl text-3xl">
              {event.name}
            </H1>
            <p className="whwhitespace-nowrapite text-md md:text-lg text-white/75">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>
            <button className="bg-white/20 text-sm md:text-lg capitalize w-[85vw] sm:w-full rounded-md border-2 border-white/10 py-2 mt-5 sm:mt-auto bg-blur hover:scale-105 active:scale-[1.02] transition cursor-pointer">
              Get tickets
            </button>
          </div>
        </div>
      </section>
      <div className="text-center max-w-4xl mx-auto py-16 px-8">
        <section className="mb-5">
          <h2 className="text-2xl font-bold mb-3">About this event</h2>
          <p className="leading-7 text-white/75 text-sm sm:text-base">
            {event.description}
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-3">Location</h2>
          <p className="text-white/75">{event.location}</p>
        </section>
      </div>
    </main>
  );
}
