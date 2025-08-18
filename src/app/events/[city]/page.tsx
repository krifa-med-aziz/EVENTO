import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { z } from "zod";
import Eventlist from "@/components/Event-list";
import H1 from "@/components/H1";

type Props = {
  params: {
    city: string;
  };
};

type EventsPageProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;

  return {
    title:
      city === "all"
        ? "All Events"
        : `Events in ${city[0].toLocaleUpperCase() + city.slice(1)}`,
  };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({
  params,
  searchParams,
}: EventsPageProps) {
  const city = params.city;
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);
  if (!parsedPage.success) {
    throw new Error("Invalid page number");
  }

  return (
    <main className="max-w-6xl mx-auto flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-15 sm:mb-28">
        {city === "all" && "All Events"}
        {city !== "all" &&
          `Events in ${city[0].toLocaleUpperCase() + city.slice(1)}`}
      </H1>
      <Suspense key={city + parsedPage.data} fallback={<Loading />}>
        <Eventlist city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
}
