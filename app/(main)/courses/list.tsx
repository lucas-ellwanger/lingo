"use client";

import type { Course } from "@/db/schema";

import { Card } from "./card";

interface Props {
  courses: Course[];
  activeCourseId: number;
}

export const List = ({ courses, activeCourseId }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-4 pt-6 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={() => {}}
          disabled={false}
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  );
};
