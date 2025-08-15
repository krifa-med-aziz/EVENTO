import H1 from "@/components/H1";
import { TEvent } from "@/lib/types";
import React from "react";

export default async function page({ params }: { params: { city: string } }) {
  const { city } = await params;

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: TEvent[] = await response.json();
  console.log(events);

  return (
    <main className="max-w-6xl flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1>
        {city === "all" && "All Events"}
        {city !== "all" &&
          `Events in ${city[0].toLocaleUpperCase() + city.slice(1)}`}
      </H1>
      {events.map((event) => {
        return <section key={event.id}>{event.name}</section>;
      })}
    </main>
  );
}
