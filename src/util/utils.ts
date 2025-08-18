import "server-only";
import prisma from "@/lib/db";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";

export const getEvents = unstable_cache(async (city: string, page = 1) => {
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
    take: 6,
    skip: (page - 1) * 6,
  });

  let totalCount;
  if (city === "all") {
    totalCount = await prisma.tEvent.count();
  } else {
    totalCount = await prisma.tEvent.count({
      where: {
        city: (city = city[0].toLocaleUpperCase() + city.slice(1)),
      },
    });
  }
  return { events, totalCount };
});

export const getEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.tEvent.findUnique({
    where: {
      slug: slug,
    },
  });
  if (!event) {
    return notFound();
  }
  return event;
});
