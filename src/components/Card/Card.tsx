import React, { FC } from "react";
import { classnames } from "@/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement>;
export const Card: FC<CardProps> = ({ className, ...props }) => (
  <div
    className={classnames(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
);