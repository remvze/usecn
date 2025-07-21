'use client';

import { useEffect, type RefObject } from 'react';

type EventMap = WindowEventMap & DocumentEventMap & HTMLElementEventMap;

type EventTargetElement = HTMLElement | Document | Window;

export function useEventListener<
  K extends keyof EventMap,
  T extends EventTargetElement = Window,
>(
  event: K,
  handler: (event: EventMap[K]) => void,
  element?: T | RefObject<T> | null,
) {
  useEffect(() => {
    const target: EventTargetElement | null | undefined =
      typeof element === 'undefined'
        ? window
        : (element as RefObject<T>)?.current ?? (element as T);

    if (!target?.addEventListener) return;

    const listener = (e: Event) => handler(e as EventMap[K]);

    target.addEventListener(event, listener);

    return () => {
      target.removeEventListener(event, listener);
    };
  }, [event, handler, element]);
}
