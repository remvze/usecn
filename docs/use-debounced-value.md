## useDebouncedValue

A hook to debounce a value/state.

#### Install

```bash
npx shadcn@latest add https://usecn.mvze.net/r/use-debounced-value.json
```

#### Usage

```tsx
import { useState } from 'react';

import { useDebouncedValue } from '@/hooks/use-debounced-value';

function App() {
  const [value, setValue] = useState('');
  const debounedValue = useDebouncedValue(value, 1000);

  return (
    <div>
      <h1>{debounedValue}</h1>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  );
}

export default App;
```
