
import * as React from "react"

// Mobile breakpoint constants
const MOBILE_BREAKPOINT = 768
const SMALL_MOBILE_BREAKPOINT = 480

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)
  const [isSmallMobile, setIsSmallMobile] = React.useState<boolean>(false)
  const [windowWidth, setWindowWidth] = React.useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  )

  React.useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    // Initial check for mobile
    const checkMobileSize = () => {
      const width = window.innerWidth
      setWindowWidth(width)
      setIsMobile(width < MOBILE_BREAKPOINT)
      setIsSmallMobile(width < SMALL_MOBILE_BREAKPOINT)
    }
    
    checkMobileSize()
    
    // More efficient resize handler with debounce
    let timeoutId: ReturnType<typeof setTimeout>;
    
    const handleResize = () => {
      clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        checkMobileSize()
      }, 100); // Debounce for better performance
    }
    
    window.addEventListener("resize", handleResize, { passive: true })
    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(timeoutId);
    }
  }, [])

  return { isMobile, isSmallMobile, windowWidth }
}
