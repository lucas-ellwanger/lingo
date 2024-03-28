const LessonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex h-full w-full flex-col">{children}</div>
    </div>
  );
};

export default LessonLayout;
