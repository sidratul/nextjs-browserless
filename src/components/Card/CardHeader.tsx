import React, { FC } from "react";
import { classnames } from "@/utils";

type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;
export const CardHeader: FC<CardHeaderProps> = ({ className, ...props }) => (
  <div className={classnames("flex flex-col space-y-1.5 p-6", className)} {...props} />
);