import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20",
          "disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-white text-black hover:bg-white/90 px-8 py-3 text-base": variant === "default" && size === "default",
            "bg-white text-black hover:bg-white/90 px-6 py-2 text-sm": variant === "default" && size === "sm",
            "bg-white text-black hover:bg-white/90 px-10 py-4 text-lg": variant === "default" && size === "lg",
            "border border-white/10 bg-transparent text-white hover:bg-white/5 hover:border-white/20 px-8 py-3 text-base": variant === "outline" && size === "default",
            "border border-white/10 bg-transparent text-white hover:bg-white/5 hover:border-white/20 px-6 py-2 text-sm": variant === "outline" && size === "sm",
            "border border-white/10 bg-transparent text-white hover:bg-white/5 hover:border-white/20 px-10 py-4 text-lg": variant === "outline" && size === "lg",
            "text-white hover:bg-white/5 px-8 py-3 text-base": variant === "ghost" && size === "default",
            "text-white hover:bg-white/5 px-6 py-2 text-sm": variant === "ghost" && size === "sm",
            "text-white hover:bg-white/5 px-10 py-4 text-lg": variant === "ghost" && size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }

