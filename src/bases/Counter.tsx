import { useState } from 'react';

//se crea una interface para los props ya que no se puede poner directamente elementToAnimate la desestructuracion.
//porque reac lo interpreta como alias y no como tipado

// otra forma de decirle el tipo es inicializando el valor
//ya sea , 0, '' etc.

interface Props {
  initialValue?: number;
}

export const Counter = ({ initialValue = 0 }: Props) => {
  const [counter, setCounter] = useState(initialValue);

  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>

      <button onClick={handleClick}>+1</button>
    </>
  );
};
