import { TEvent } from "@/lib/types";
import EventCard from "./EventCard";

export default function Eventlist({ events }: { events: TEvent[] }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
