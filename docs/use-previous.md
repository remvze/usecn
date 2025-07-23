## usePrevious

A hook to keep the previous value of a state.

#### Install

```bash
npx shadcn@latest add https://usecn.mvze.net/r/use-previous.json
```

#### Usage

```tsx
import { useState } from 'react';

import { usePrevious } from '@/hooks/use-previous';

function App() {
  const [value, setValue] = useState('');
  const previous = usePrevious(value);

  return (
    <div>
      <p>Old: {previous}</p>
      <p>New: {value}</p>

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
