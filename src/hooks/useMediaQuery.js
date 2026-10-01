import { useEffect, useState } from 'react';
import { BREAKPOINTS } from '../utils/constants';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQueryList = window.matchMedia(query);

    const updateMatches = () => {
      setMatches(mediaQueryList.matches);
    };

    mediaQueryList.addEventListener('change', updateMatches);

    return () => {
      mediaQueryList.removeEventListener('change', updateMatches);
    };
  }, [query]);

  return matches;
};

export const useBreakpoint = () => {
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINTS.MOBILE}px)`);
  const isTablet = useMediaQuery(
    `(min-width: ${BREAKPOINTS.MOBILE + 1}px) and (max-width: ${BREAKPOINTS.TABLET}px)`
  );
  const isDesktop = useMediaQuery(`(min-width: ${BREAKPOINTS.TABLET + 1}px)`);
  const isLargeDesktop = useMediaQuery(
    `(min-width: ${BREAKPOINTS.LARGE_DESKTOP}px)`
  );

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
    isMobileOrTablet: isMobile || isTablet,
  };
};

export default useMediaQuery;
