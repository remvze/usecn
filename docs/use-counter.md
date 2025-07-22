## useCounter

A hook to manage a counter with increment and decrement.

#### Install

```bash
npx shadcn@latest add https://usecn.mvze.net/r/use-counter.json
```

#### Usage

```tsx
import { useCounter } from '@/hooks/use-counter';

function App() {
  const [value, { increment, decrement, reset }] = useCounter(0, {
    min: -10,
    max: 10,
  });

  return (
    <div>
      <h1>Counter: {value}</h1>
      <div>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
        <button onClick={() => reset()}>Reset</button>
      </div>
    </div>
  );
}

export default App;
```
