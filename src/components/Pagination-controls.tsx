import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type PaginationControlsProps = {
  previousPath: string;
  nextPath: string;
};

const btnStyles =
  'className="text-white flex items-center gap-x-2 px-5 py-3 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm';

export default function PaginationControls({
  previousPath,
  nextPath,
}: PaginationControlsProps) {
  return (
    <section className="flex justify-between w-full mt-20">
      {previousPath && (
        <Link href={previousPath} className={twMerge(btnStyles, "mr-auto")}>
          <ArrowLeftIcon /> Previous
        </Link>
      )}
      {nextPath && (
        <Link href={nextPath} className={twMerge(btnStyles, "ml-auto")}>
          <ArrowRightIcon /> Next
        </Link>
      )}
    </section>
  );
}
