import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';

interface Controllers {
  decrement(decrementBy?: number): void;
  increment(incrementBy?: number): void;
  reset(): void;
  set: Dispatch<SetStateAction<number>>;
}

interface Options {
  max?: number;
  min?: number;
}

export function useCounter(
  startingValue: number = 0,
  options: Options = {},
): [number, Controllers] {
  const [value, setValue] = useState<number>(startingValue);

  useEffect(() => {
    if (typeof options.max !== 'undefined' && startingValue > options.max) {
      throw new Error('Starting value cannot be bigger than the max');
    }

    if (typeof options.min !== 'undefined' && startingValue < options.min) {
      throw new Error('Starting value cannot be smaller than the min');
    }
  }, [options.max, options.min, startingValue]);

  const increment = useCallback(
    (incrementBy: number = 1) => {
      setValue(prev => {
        prev += incrementBy;

        if (typeof options.max !== 'undefined' && options.max < prev) {
          return options.max;
        }

        return prev;
      });
    },
    [options.max],
  );

  const decrement = useCallback(
    (decrementBy: number = 1) => {
      setValue(prev => {
        prev -= decrementBy;

        if (typeof options.min !== 'undefined' && options.min > prev) {
          return options.min;
        }

        return prev;
      });
    },
    [options.min],
  );

  const reset = useCallback(() => {
    setValue(startingValue);
  }, [startingValue]);

  const controllers = useMemo(
    () => ({ decrement, increment, reset, set: setValue }),
    [increment, decrement, reset, setValue],
  );

  return [value, controllers];
}
