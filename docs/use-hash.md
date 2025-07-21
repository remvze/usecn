## useHash

Hook to work with the URL hash.

#### Install

```bash
npx shadcn@latest add https://usecn.mvze.net/r/use-hash.json
```

JavaScript version:

```bash
npx shadcn@latest add https://usecn.mvze.net/r/use-hash-js.json
```

#### Usage

```tsx
import { useHash } from '@/hooks/use-hash';

function App() {
  const { hash, setHash } = useHash();

  return (
    <div>
      <h1>{hash}</h1>
      <input type="text" value={hash} onChange={e => setHash(e.target.value)} />
    </div>
  );
}

export default App;
```
