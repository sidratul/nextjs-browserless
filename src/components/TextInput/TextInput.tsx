import React, { FC, InputHTMLAttributes, Ref } from "react"
import { classnames } from "@/utils/classname"

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputRef: Ref<HTMLInputElement>;
};

export const TextInput: FC<TextInputProps> = ({ className, type, inputRef, ...props }) => {
  return (
    <input
      ref={inputRef}
      type={type}
      className={classnames(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}
