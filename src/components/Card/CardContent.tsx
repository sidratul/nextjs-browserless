import React, { FC } from "react";
import { classnames } from "@/utils";

type CardContentProps = React.HTMLAttributes<HTMLDivElement>;
export const CardContent: FC<CardContentProps> = ({ className, ...props }) => (
  <div className={classnames("p-6 pt-0", className)} {...props} />
);