import { useCounter } from '../hooks/useCounter';

export const CounterHook = () => {
  //simplemente se usa como un custom hook normal
  const { counter, elementToAnimate, handleClick } = useCounter({
    maxCount: 15,
  });

  return (
    <>
      <h1>Counter Hook:</h1>
      {/* hace la referencia directa al useRef dentro del customHook */}
      <h2 ref={elementToAnimate}>{counter}</h2>

      <button onClick={handleClick}>+1</button>
    </>
  );
};
