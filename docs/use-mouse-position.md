## useMousePosition

A hook to get the position of the mouse.

#### Install

```bash
npx shadcn@latest add https://usecn.mvze.net/r/use-mouse-position.json
```

#### Usage

```tsx
import { useMousePosition } from '@/hooks/use-mouse-position';

function App() {
  const { x, y } = useMousePosition();

  return (
    <div>
      <p>
        x: {x}; y: {y}
      </p>
    </div>
  );
}

export default App;
```
