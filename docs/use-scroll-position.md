## useScrollPosition

A hook to get the scroll position.

#### Install

```bash
npx shadcn@latest add https://usecn.mvze.net/r/use-scroll-position.json
```

#### Usage

```tsx
import { useEffect } from 'react';

import { useScrollPosition } from '@/hooks/use-scroll-position';

function App() {
  const position = useScrollPosition();

  useEffect(() => {
    console.log(position);
  }, [position]);

  return <div style={{ height: '1000vh' }} />;
}

export default App;
```
