## useEventListener

A hook to set an event listener with cleanup.

#### Install

```bash
npx shadcn@latest add https://usecn.mvze.net/r/use-event-listener.json
```

#### Usage

```tsx
import { useEventListener } from '@/hooks/use-event-listener';

function App() {
  useEventListener(
    'mousemove',
    e => {
      console.log({ x: e.clientX, y: e.clientY });
    },
    document,
  );

  return <div>Move the mouse!</div>;
}

export default App;
```
