"use client";

import { useState } from "react";

import type { Challenge, ChallengeOption } from "@/db/schema";

import { Header } from "./header";

interface Props {
  initialLessonId: number;
  initialLessonChallenges: (Challenge & {
    completed: boolean;
    challengeOptions: ChallengeOption[];
  })[];
  initialHearts: number;
  initialPercentage: number;
  userSubscription: any; // TODO: Replace with subscription db type
}

export default function Quiz({
  initialLessonId,
  initialLessonChallenges,
  initialHearts,
  initialPercentage,
  userSubscription,
}: Props) {
  const [hearts, setHearts] = useState(initialHearts);
  const [percentage, setPercentage] = useState(initialPercentage);

  return (
    <>
      <Header
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
      />
    </>
  );
}
