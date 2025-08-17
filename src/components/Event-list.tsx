import EventCard from "./EventCard";
import { getEvents } from "@/util/utils";

type EventlistProps = {
  city: string;
};

export default async function Eventlist({ city }: EventlistProps) {
  const events = await getEvents(city);
  return (
    <>
      {events.length === 0 && (
        <p className="text-center text-white/50 text-xl">No Events!</p>
      )}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>
    </>
  );
}
