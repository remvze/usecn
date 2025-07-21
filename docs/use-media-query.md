## useMediaQuery

A hook to check if a media query matches.

#### Install

```bash
npx shadcn@latest add https://usecn.mvze.net/r/use-media-query.json
```

#### Usage

```tsx
import { useMediaQuery } from '@/hooks/use-media-query';

function App() {
  const matches = useMediaQuery('(max-width: 300px)');

  return <div>{matches ? 'Matches!' : "Doesn't Match!"}</div>;
}

export default App;
```
