'use client';

import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';

type SetValue<T> = Dispatch<SetStateAction<T>>;

export function useSessionStorage<T>(
  key: string,
  fallback: T,
): [T, SetValue<T>] {
  const [value, setValue] = useState<T>(fallback);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(key);
      if (stored !== null) {
        setValue(JSON.parse(stored));
      }
    } catch {
      // do nothing
    } finally {
      setIsHydrated(true);
    }
  }, [key]);

  useEffect(() => {
    if (!isHydrated) return;

    try {
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch {
      // do nothing
    }
  }, [key, value, isHydrated]);

  return [value, setValue];
}
