
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

  // Create a proper object instead of trying to attach properties to a boolean
  const result = {
    value: !!isMobile,
    isMobile: !!isMobile,
    windowWidth: windowWidth || 0
  }
  
  // Return the object that has a value property and can be used in boolean contexts
  return result
}
