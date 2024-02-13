import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-16 w-full font-barlow rounded-md border border-light_gray bg-light_gray px-3 py-2 text-xl ring-offset-light_gray file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:medium_gray text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-muala focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 ",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
