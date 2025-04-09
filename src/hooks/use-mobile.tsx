
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [windowWidth, setWindowWidth] = React.useState<number | undefined>(undefined)
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setWindowWidth(width)
      setIsMobile(width < MOBILE_BREAKPOINT)
    }

    // Set initial values
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Create a result value that's both a boolean and has properties
  const result = !!isMobile as boolean & { isMobile: boolean, windowWidth: number }
  
  // Attach properties to the boolean
  result.isMobile = !!isMobile
  result.windowWidth = windowWidth || 0
  
  return result
}
