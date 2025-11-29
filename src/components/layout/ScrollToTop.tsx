import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 *
 * Automatically scrolls to the top of the page whenever the route changes.
 * Uses instant scroll behavior to prevent header animation lag.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top instantly and synchronously to prevent header lag
    // Using scrollTo with behavior 'instant' ensures no smooth scroll animation
    // that could interfere with header transitions
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
