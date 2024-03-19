import Image from "next/image";

import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="hidden h-20 w-full border-t-2 border-slate-200 p-2 lg:block">
      <div className="mx-auto flex h-full max-w-screen-lg items-center justify-evenly gap-x-3">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/br.svg"
            alt="Brazilian Portuguese"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Brazilian
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/fr.svg"
            alt="French"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          French
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/jp.svg"
            alt="Japanese"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Japanese
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/cn.svg"
            alt="Mandarin"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Mandarin
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/es.svg"
            alt="Spanish"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>
      </div>
    </footer>
  );
};
