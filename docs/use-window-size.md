## useWindowSize

A hook to get the window size.

#### Install

```bash
npx shadcn@latest add https://usecn.mvze.net/r/use-window-size.json
```

#### Usage

```tsx
import { useWindowSize } from '@/hooks/use-window-size';

function App() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>
        Width: {width}px; Height: {height}px
      </p>
    </div>
  );
}

export default App;
```
