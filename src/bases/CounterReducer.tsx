import { useReducer } from 'react';

// interfces del estado inicial
interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

//estado inicial valor minimo con el que nuestro state de reducer empieza
const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

//typos de acciones soportadas por el reducer, ts va indicar si no es correcta
type CounterAction =
  | { type: 'increaseBy'; payload: { value: number } }
  | { type: 'reset' };

//aciones del reducer, el cual siempre recibe un sate y el action
const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  // desestructuracion dde state anterior
  const { counter, changes } = state;

  switch (action.type) {
    case 'reset':
      //no necesita el payload pq los valores que va seteat ya son conocidos
      return {
        changes: 0,
        counter: 0,
        previous: 0,
      };

    case 'increaseBy':
      //si necesita el payload por ese asiganara el nuevo state
      return {
        changes: changes + 1,
        counter: counter + action.payload.value,
        previous: counter, // hace referencia al objeto desestructurado, por eso no sobreescribe el de ln 42, usa 28
      };

    default:
      return state;
  }
};

//la logica de nuestro componente
export const CounterReducerComponent = () => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleReset = () => {
    dispatch({ type: 'reset' });
  };

  const increaseBy = (value: number) => {
    dispatch({ type: 'increaseBy', payload: { value } });
  };

  return (
    <>
      <h1>Counter Reducer</h1>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>

      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(5)}>+5</button>
      <button onClick={() => increaseBy(10)}>+10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

// nota se recomienda usar un use reducer en lugar de un use state cuando el objeto de la informacioon que se comparte
// es delicaod y consumido de varias formas diferent4es en varios lados
