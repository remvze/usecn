'use client';

import { useEffect, useState } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
}

export function useScrollPosition(
  target?: React.RefObject<HTMLElement>,
): ScrollPosition {
  const [position, setPosition] = useState<ScrollPosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      if (target?.current) {
        setPosition({
          x: target.current.scrollLeft,
          y: target.current.scrollTop,
        });
      } else {
        setPosition({
          x: window.scrollX,
          y: window.scrollY,
        });
      }
    };

    handleScroll();

    const scrollTarget = target?.current || window;

    scrollTarget.addEventListener('scroll', handleScroll, { passive: true });

    return () => scrollTarget.removeEventListener('scroll', handleScroll);
  }, [target]);

  return position;
}
