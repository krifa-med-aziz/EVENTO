import Eventlist from "@/components/Event-list";
import H1 from "@/components/H1";
import React, { Suspense } from "react";
import Loading from "./loading";

export default async function page({ params }: { params: { city: string } }) {
  const { city } = await params;

  return (
    <main className="max-w-6xl mx-auto flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-15 sm:mb-28">
        {city === "all" && "All Events"}
        {city !== "all" &&
          `Events in ${city[0].toLocaleUpperCase() + city.slice(1)}`}
      </H1>
      <Suspense fallback={<Loading />}>
        <Eventlist city={city} />
      </Suspense>
    </main>
  );
}
