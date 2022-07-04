import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);
  // al usar useRef se le puede dar tipado de elemento HTMLElement

  //se puede inicializar null
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    //el objetivo es que counter no pase de 10
    //Mathe.min tomo el menor de un array de number y retorna ese valor, poer ello si valor es mayor que 10
    //toma la constante MAXIMUN_COUNT
    setCounter((prev) => Math.min(prev + 1, MAXIMUN_COUNT));
  };

  useEffect(() => {
    if (counter < 10) return;
    //fomra de darle estilo a los console.log

    //recordar useRef mantiene la referencia de un elemento
    //sin importar los re renderizados, al igual que use meme
    //o use Callback
    console.log(
      '%cSe llego al valor máximo',
      'color: red; background-color: black;'
    );

    const tl = gsap.timeline();
    //.current contiene el elemento real HTML, counterElement es solo un objeto
    tl.to(counterElement.current, {
      y: -10,
      duration: 0.2,
      ease: 'ease.out',
    }).to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' });
  }, [counter]);

  return (
    <>
      <h1>CounterEffect:</h1>
      {/* al definir el ref el error de TS nos dice el tipo a poner en el ref */}
      <h2 ref={counterElement}>{counter}</h2>

      <button onClick={handleClick}>+1</button>
    </>
  );
};

// notac cuando se trabaja con referencias HTML
//posiblemente es mas conveniente user useLayoutEffect
//en lugar de useEffect porque el espera a que se construya
//el elemento y es sincrono
//es un consejo obcional
