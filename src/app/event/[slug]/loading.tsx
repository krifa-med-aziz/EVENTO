import Skeleton from "@/components/Skeleton";

export default function loading() {
  return (
    <div className="flex flex-col items-center gap-y-4 pt-28">
      <Skeleton className="h-4 w-[60%] sm:w-[40%]" />
      <Skeleton className="h-4 w-[50%] sm:w-[30%]" />
      <Skeleton className="h-4 w-[55%] sm:w-[35%]" />
      <Skeleton className="h-4 w-[58%] sm:w-[38%]" />
    </div>
  );
}
