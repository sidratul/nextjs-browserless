import React, { FC } from "react";
import { classnames } from "@/utils";

type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;
export const CardDescription: FC<CardDescriptionProps> = ({
  className,
  ...props
}) => (
  <p className={classnames("text-sm text-muted-foreground", className)} {...props} />
);