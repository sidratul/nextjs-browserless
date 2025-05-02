import React, { FC } from "react";
import { classnames } from "@/utils";

type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;
export const CardFooter: FC<CardFooterProps> = ({ className, ...props }) => (
  <div className={classnames("flex items-center p-6 pt-0", className)} {...props} />
);