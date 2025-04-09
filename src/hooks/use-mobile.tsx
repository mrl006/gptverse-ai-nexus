
import * as React from "react"

// More precise mobile breakpoint constant
const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)
  const [windowWidth, setWindowWidth] = React.useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  )

  React.useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    // Initial check for mobile
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    setWindowWidth(window.innerWidth)
    
    // More efficient resize handler with debounce
    let timeoutId: ReturnType<typeof setTimeout>;
    
    const handleResize = () => {
      clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
        setWindowWidth(window.innerWidth)
      }, 100); // Debounce for better performance
    }
    
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(timeoutId);
    }
  }, [])

  // Return both the boolean and the object with both values
  // This allows backward compatibility
  return Object.assign(isMobile, { isMobile, windowWidth })
}
