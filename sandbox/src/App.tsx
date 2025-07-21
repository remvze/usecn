import { useHash } from './hooks/use-hash';

function App() {
  const { hash, setHash } = useHash();
  return (
    <>
      <h1>{hash}</h1>
      <input type="text" value={hash} onChange={e => setHash(e.target.value)} />
    </>
  );
}

export default App;
