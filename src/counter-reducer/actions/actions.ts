export type CounterAction =
  | { type: 'increaseBy'; payload: { value: number } }
  | { type: 'reset' };

// export const doReset = ():CounterAction => {
//     return {
//         type: 'reset'
//     }
// }

//*****ACTIONS CREATORS*********/
//funciones que harean el manejo de acciones mas sensillas en componente
//al hacer un dispatch, ya se saber que retornaran un tipoo CounterAction
//es mejor tener centralizadas las acciones de esta forma por si hay un refactor
export const doReset = (): CounterAction => ({
  type: 'reset',
});

export const doIncreaseBy = (value: number): CounterAction => ({
  type: 'increaseBy',
  payload: { value },
});

//recordar tienen return implicito ya gracias a que estan entre parentesis
//tam=bien se podria crear una constante

// const actions = {
//     doReset:'reset'
// }

// console.log(actions.doReset);
