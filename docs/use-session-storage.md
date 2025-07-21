## useSessionStorage

A hook to work with the session storage.

#### Install

```bash
npx shadcn@latest add https://usecn.mvze.net/r/use-session-storage.json
```

#### Usage

```tsx
import { useSessionStorage } from '@/hooks/use-session-storage';

function App() {
  const [value, setValue] = useSessionStorage('test', '');

  return (
    <div>
      <h1>{value}</h1>
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
