import { classnames } from "@/utils/classname"

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={classnames("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}