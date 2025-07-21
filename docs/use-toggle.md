## useMousePosition

A hook to toggle a between `true` and `false`.

#### Install

```bash
npx shadcn@latest add https://usecn.mvze.net/r/use-toggle.json
```

#### Usage

```tsx
import { useToggle } from '@/hooks/use-toggle';

function App() {
  const [isActive, toggleIsActive] = useToggle(false);

  return (
    <div>
      <h1>Is Active? {isActive ? 'Yes' : 'No'}</h1>
      <button onClick={toggleIsActive}>Toggle</button>
    </div>
  );
}

export default App;
```
