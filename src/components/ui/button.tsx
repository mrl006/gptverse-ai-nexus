
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        glassy: "bg-white/15 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 hover:border-white/30 shadow-sm transition-all duration-300 hover:shadow-white/5",
        "glassy-glow": "bg-white/15 backdrop-blur-xl border border-white/20 text-white hover:border-white/40 shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] group",
        "gradient": "bg-gradient-to-r from-[#0ef34b]/90 to-[#00aeff]/90 text-black font-semibold border-none hover:brightness-110 hover:shadow-[0_0_20px_rgba(14,243,75,0.4)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "glassy",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {/* Add top highlight for glassy variants */}
        {(variant === 'glassy' || variant === 'glassy-glow') && (
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        )}
        
        {/* Add animated background for glassy-glow variant */}
        {variant === 'glassy-glow' && (
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        )}
        
        {/* Make sure content stays on top */}
        <div className="relative z-10 flex items-center gap-2">
          {props.children}
        </div>
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
