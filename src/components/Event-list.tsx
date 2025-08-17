import { TEvent } from "@/lib/types";
import EventCard from "./EventCard";

export default async function Eventlist({ city }: { city: string }) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
    {
      cache: "force-cache",
    }
  );
  const events: TEvent[] = await response.json();
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
