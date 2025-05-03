import React, { FC } from "react";
import { classnames } from "@/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement>;
export const Card: FC<CardProps> = ({ className, ...props }) => (
  <div
    className={classnames(
      "rounded-lg border border-gray-200 bg-background text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
);