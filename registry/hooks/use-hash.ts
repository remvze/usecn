'use client';

import { useState, useEffect, useCallback } from 'react';

export function useHash() {
  const getHash = () =>
    typeof window !== 'undefined' ? window.location.hash.slice(1) : '';

  const [hash, setHashState] = useState<string>(getHash);

  useEffect(() => {
    const onHashChange = () => {
      setHashState(getHash());
    };

    window.addEventListener('hashchange', onHashChange);

    return () => {
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  const setHash = useCallback((newHash: string) => {
    window.location.hash = newHash;
  }, []);

  const clearHash = useCallback(() => {
    history.pushState(
      '',
      document.title,
      window.location.pathname + window.location.search,
    );

    setHashState('');
  }, []);

  return { clearHash, hash, setHash };
}
