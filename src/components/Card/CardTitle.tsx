import React, { FC } from "react";
import { classnames } from "@/utils";

type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>;
export const CardTitle: FC<CardTitleProps> = ({ className, ...props }) => (
  <h3
    className={classnames(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
);