import { useState } from 'react';

interface Props {
  initialValue?: number;
}

interface CounterState {
  counter: number;
  clicks: number;
}

export const CounterBy = ({ initialValue = 5 }: Props) => {
  // para darle el tipo a un hook usamos los genericos con una interface
  // estos nos facilita incluso el manejar la desestructuracion
  const [{ counter, clicks }, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  });

  const handleClick = (value: number) => {
    //al cambiar el state en una propiedad es necesario que pensemos en los
    //otros elementos del objeto state, sino ts no lo
    // esta duncion se maneja como arroy function para representar un return implicito
    //seria en realidad
    //setCounter(prev =>  return {counter: 1, clicks: 1})

    setCounterState(({ clicks, counter }) => ({
      //counter : prev.counter +1
      counter: counter + value,
      //clicks : prev.clicks+1
      clicks: clicks + 1,
      //recordar la gracia de editar state es retornar el stte anterior mas cambios
    }));
  };

  return (
    <>
      <h1>CounterBy: {counter}</h1>
      <h1>Clicks: {clicks}</h1>

      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </>
  );
};
//  tambien se podria darle valor por defecto
//  en la propia definicion del state
//  const [counter, setCounter] = useState({
//     counter:0
//     clicks:1}
