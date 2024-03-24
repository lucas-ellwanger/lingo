import "dotenv/config";

import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import * as schema from "../db/schema";

const client = createClient({
  url: process.env.DATABASE_URL!,
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

const db = drizzle(client, { schema });

const main = async () => {
  try {
    console.log("Seeding the database...");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Brazilian Portuguese",
        imageSrc: "/br.svg",
      },
      {
        id: 2,
        title: "French",
        imageSrc: "/fr.svg",
      },
      {
        id: 3,
        title: "Japanese",
        imageSrc: "/jp.svg",
      },
      {
        id: 4,
        title: "Mandarin",
        imageSrc: "/cn.svg",
      },
      {
        id: 5,
        title: "Spanish",
        imageSrc: "/es.svg",
      },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
