'use client';

import { useState, useCallback } from 'react';

export function useToggle(initial: boolean) {
  const [value, setValue] = useState<boolean>(initial);

  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  return [value, toggle];
}
