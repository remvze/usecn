import { useWindowSize } from './hooks/use-window-size';

function App() {
  const { height, width } = useWindowSize();

  return (
    <div>
      <p>
        Width: {width}px; Height: {height}px
      </p>
    </div>
  );
}

export default App;
