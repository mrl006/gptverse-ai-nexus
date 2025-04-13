
import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        glassy: 
          "bg-[#040812]/20 backdrop-blur-xl border border-[#0ef34b]/15 text-white hover:bg-[#040812]/30 hover:border-[#0ef34b]/30 data-[state=on]:bg-[#0ef34b]/10 data-[state=on]:border-[#0ef34b]/40 data-[state=on]:shadow-[0_0_15px_rgba(14,243,75,0.2)] group",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "glassy",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  >
    {/* Add top highlight */}
    {variant === 'glassy' && (
      <>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/5 via-transparent to-[#00aeff]/5 opacity-0 group-hover:opacity-100 data-[state=on]:opacity-100 transition-opacity duration-500"></div>
      </>
    )}
    
    {/* Make sure content stays on top */}
    <div className="relative z-10">
      {props.children}
    </div>
  </TogglePrimitive.Root>
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
