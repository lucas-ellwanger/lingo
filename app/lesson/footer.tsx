import { CheckCircle, XCircle } from "lucide-react";
import { useKey, useMedia } from "react-use";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Props {
  onCheck: () => void;
  status: "correct" | "wrong" | "none" | "completed";
  disabled?: boolean;
  lessonId?: number;
}

export const Footer = ({ onCheck, status, disabled, lessonId }: Props) => {
  useKey("Enter", onCheck, {}, [onCheck]);
  const isMobile = useMedia("(max-width: 1024px)");

  return (
    <footer
      className={cn(
        "h-[100px] border-t-2 lg:h-[140px]",
        status === "correct" && "border-transparent bg-green-100",
        status === "wrong" && "border-transparent bg-rose-100",
      )}
    >
      <div className="mx-auto flex h-full max-w-[1140px] items-center justify-between px-6 lg:px-10">
        {status === "correct" && (
          <div className="flex items-center text-base font-bold text-green-500 lg:text-2xl">
            <CheckCircle className="mr-4 h-6 w-6 lg:h-10 lg:w-10" />
            <span className="mt-0.5">Nicely done!</span>
          </div>
        )}
        {status === "wrong" && (
          <div className="flex items-center text-base font-bold text-rose-500 lg:text-2xl">
            <XCircle className="mr-4 h-6 w-6 lg:h-10 lg:w-10" />
            <span className="mt-0.5">Try again.</span>
          </div>
        )}
        {status === "completed" && (
          <Button
            variant="default"
            size={isMobile ? "sm" : "lg"}
            onClick={() => (window.location.href = `/lesson/${lessonId}`)}
          >
            <span className="mt-0.5">Practice again</span>
          </Button>
        )}
        <Button
          disabled={disabled}
          className="ml-auto"
          onClick={onCheck}
          size={isMobile ? "sm" : "lg"}
          variant={status === "wrong" ? "danger" : "secondary"}
        >
          {status === "none" && <span className="mt-0.5">Check</span>}
          {status === "correct" && <span className="mt-0.5">Next</span>}
          {status === "wrong" && <span className="mt-0.5">Retry</span>}
          {status === "completed" && <span className="mt-0.5">Continue</span>}
        </Button>
      </div>
    </footer>
  );
};
