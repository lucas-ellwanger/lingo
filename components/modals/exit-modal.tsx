"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useExitModal } from "@/store/use-exit-modal";

export const ExitModal = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const { isOpen, close } = useExitModal();

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="mb-5 flex w-full items-center justify-center">
            <Image src="/mascot_sad.svg" alt="Mascot" height={80} width={80} />
          </div>
          <DialogTitle className="text-center text-2xl font-bold">
            Wait, don&apos;t go!
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            You&apos;re about to leave the lesson. Are you sure?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex w-full flex-col gap-y-4">
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={close}
            >
              <span className="mt-0.5">Keep learning</span>
            </Button>
            <Button
              variant="dangerOutline"
              size="lg"
              className="w-full"
              onClick={() => {
                close();
                router.push("/learn");
              }}
            >
              <span className="mt-0.5">End session</span>
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
