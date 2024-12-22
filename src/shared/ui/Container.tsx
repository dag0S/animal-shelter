import { FC, ReactNode } from "react";
import { cn } from "../lib";

interface Props {
  className?: string;
  children: ReactNode;
}

export const Container: FC<Props> = ({ className, children }) => {
  return (
    <div className={cn("mx-auto max-w-[1280px] px-3", className)}>
      {children}
    </div>
  );
};
