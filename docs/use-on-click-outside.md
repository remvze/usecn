## useDebouncedValue

A hook to fire an event when clicked outside.

#### Install

```bash
npx shadcn@latest add https://usecn.mvze.net/r/use-on-click-outside.json
```

#### Usage

```tsx
import { useRef } from 'react';

import { useOnClickOutside } from '@/hooks/use-on-click-outside';

function App() {
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => alert('Clicked Outside!'));

  return <div ref={ref}>Click Outside!</div>;
}

export default App;
```
