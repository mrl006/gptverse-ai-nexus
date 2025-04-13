
import * as React from "react"

// Mobile breakpoint constants with refined values
const MOBILE_BREAKPOINT = 768
const SMALL_MOBILE_BREAKPOINT = 480
const TABLET_BREAKPOINT = 1024

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)
  const [isSmallMobile, setIsSmallMobile] = React.useState<boolean>(false)
  const [isTablet, setIsTablet] = React.useState<boolean>(false)
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
      setIsTablet(width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT)
    }
    
    checkMobileSize()
    
    // More efficient resize handler with debounce
    let timeoutId: ReturnType<typeof setTimeout>;
    
    const handleResize = () => {
      // Cancel the previous timeout
      if (timeoutId) clearTimeout(timeoutId);
      
      // Only update after a short delay to prevent excessive re-renders
      timeoutId = setTimeout(() => {
        checkMobileSize()
      }, 100); // Decreased debounce time for more responsive UI
    }
    
    window.addEventListener("resize", handleResize, { passive: true })
    return () => {
      window.removeEventListener("resize", handleResize)
      if (timeoutId) clearTimeout(timeoutId);
    }
  }, [])

  return { isMobile, isSmallMobile, isTablet, windowWidth }
}
