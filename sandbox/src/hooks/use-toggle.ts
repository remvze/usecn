import { useState, useCallback } from 'react';

export function useToggle(initial: boolean): [boolean, () => void] {
  const [value, setValue] = useState<boolean>(initial);

  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  return [value, toggle];
}
