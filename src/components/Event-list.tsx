import EventCard from "./EventCard";
import { getEvents } from "@/util/utils";
import PaginationControls from "./Pagination-controls";

type EventlistProps = {
  city: string;
  page?: number;
};

export default async function Eventlist({ city, page = 1 }: EventlistProps) {
  const { events, totalCount } = await getEvents(city, page);
  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath =
    totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : "";
  if (events.length === 0) {
    return <p className="text-center text-white/50 text-xl">No Events!</p>;
  }
  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>
      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </>
  );
}
