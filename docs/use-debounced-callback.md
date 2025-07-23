## useDebouncedCallback

A hook to debounce a callback.

#### Install

```bash
npx shadcn@latest add https://usecn.mvze.net/r/use-debounced-callback.json
```

#### Usage

```tsx
import { useState } from 'react';

import { useDebouncedCallback } from '@/hooks/use-debounced-callback';

function App() {
  const [value, setValue] = useState('');

  const handleChange = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    1000,
  );

  return (
    <div>
      <h1>{value}</h1>
      <input type="text" onChange={handleChange} />
    </div>
  );
}

export default App;
```
