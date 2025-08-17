import prisma from "@/lib/db";
import { notFound } from "next/navigation";

export async function getEvents(city: string) {
  const events = await prisma.tEvent.findMany({
    where: {
      city:
        city === "all"
          ? undefined
          : city[0].toLocaleUpperCase() + city.slice(1),
    },
    orderBy: {
      date: "asc",
    },
  });
  return events;
}

export async function getEvent(slug: string) {
  const event = await prisma.tEvent.findUnique({
    where: {
      slug: slug,
    },
  });
  if (!event) {
    return notFound();
  }
  return event;
}
