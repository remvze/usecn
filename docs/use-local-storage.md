## useLocalStorage

A hook to work with the local storage.

#### Install

```bash
npx shadcn@latest add https://usecn.mvze.net/r/use-local-storage.json
```

#### Usage

```tsx
import { useLocalStorage } from '@/hooks/use-local-storage';

function App() {
  const [value, setValue] = useLocalStorage('test', '');

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
