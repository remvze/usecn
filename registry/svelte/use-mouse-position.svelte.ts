export const useMousePosition = () => {
  let x = $state(0);
  let y = $state(0);

  $effect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });

  return {
    get x() {
      return x;
    },
    get y() {
      return y;
    },
  };
};
