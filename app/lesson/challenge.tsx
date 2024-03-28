import { cn } from "@/lib/utils";
import type {
  ChallengeOption,
  Challenge as ChallengeSchema,
} from "@/db/schema";

import { Card } from "./card";

interface Props {
  options: ChallengeOption[];
  onSelect: (id: number) => void;
  status: "correct" | "wrong" | "none";
  selectedOption?: number;
  disabled?: boolean;
  type: ChallengeSchema["type"];
}

export const Challenge = ({
  options,
  onSelect,
  status,
  selectedOption,
  disabled,
  type,
}: Props) => {
  return (
    <div
      className={cn(
        "grid gap-2",
        type === "ASSIST" && "grid-cols-1",
        type === "SELECT" &&
          "grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]",
      )}
    >
      {options.map((option, index) => (
        <Card
          key={option.id}
          id={option.id}
          text={option.text}
          imageSrc={option.imageSrc}
          audioSrc={option.audioSrc}
          status={status}
          type={type}
          shortcut={`${index + 1}`}
          selected={selectedOption === option.id}
          onClick={() => onSelect(option.id)}
          disabled={disabled}
        />
      ))}
    </div>
  );
};
