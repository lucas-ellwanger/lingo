import Image from "next/image";

import { cn } from "@/lib/utils";

interface Props {
  value: number;
  variant: "points" | "hearts";
}

export const ResultCard = ({ value, variant }: Props) => {
  const imageSrc = variant === "hearts" ? "/heart.svg" : "/points.svg";

  return (
    <div
      className={cn(
        "w-full rounded-2xl border-2",
        variant === "points" && "border-orange-400 bg-orange-400",
        variant === "hearts" && "border-rose-500 bg-rose-500",
      )}
    >
      <div
        className={cn(
          "rounded-t-xl p-1.5 text-center text-xs font-bold uppercase text-white",
          variant === "hearts" && "bg-rose-500",
          variant === "points" && "bg-orange-400",
        )}
      >
        {variant === "hearts" ? "Hearts Left" : "Total XP"}
      </div>
      <div
        className={cn(
          "flex items-center justify-center rounded-2xl bg-white p-6 text-lg font-bold",
          variant === "hearts" && "text-rose-500",
          variant === "points" && "text-orange-400",
        )}
      >
        <Image
          alt="Icon"
          src={imageSrc}
          height={30}
          width={30}
          className="mr-1.5"
        />
        {value}
      </div>
    </div>
  );
};
