import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';

type SetValue<T> = Dispatch<SetStateAction<T>>;

export function useLocalStorage<T>(key: string, fallback: T): [T, SetValue<T>] {
  const [value, setValue] = useState(fallback);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const value = localStorage.getItem(key);

    if (!value) return;

    let parsed;

    try {
      parsed = JSON.parse(value);
    } catch (error) {
      parsed = fallback;
    }

    setValue(parsed);
    setIsHydrated(true);
  }, [key, fallback]);

  useEffect(() => {
    if (!isHydrated) return;

    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key, isHydrated]);

  return [value, setValue];
}
