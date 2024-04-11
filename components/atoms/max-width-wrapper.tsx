import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-5xl xl:text-8xl 2xl:max-w-7xl ", className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;