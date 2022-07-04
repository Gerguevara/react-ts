import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

//recorcar resibir props y desestructurar no es obligatoprio, tambien adminten
//valores posicionales arg1: number, arg2:string.. etc
export const useCounter = ({ maxCount = 10 }) => {
  const [counter, setCounter] = useState(5);

  // es de tipo any para tomar los diversos tipos que tiene los elementos html
  const elementToAnimate = useRef<any>(null);

  // usa el use raf parama matener la referencia y no crear una nueva intancia
  const tl = useRef(gsap.timeline());

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, maxCount));
  };
  // usaLayoutEffec con dependencia vacia para que solo se ejecute una vez
  //si se dejara en useEffect con couter como dependencia anaidira muchas animaciones
  useLayoutEffect(() => {
    //verifica que si exista la ref de elemento html, sino no agrega las animaciones al timeline
    if (!elementToAnimate.current) return;

    //se le pone .current pq el use ref siempre envuelve a el elemento y esta es la
    //unica forma de accesar al elemento envuelto
    tl.current
      .to(elementToAnimate.current, { y: -10, duration: 0.2, ease: 'ease.out' })
      .to(elementToAnimate.current, { y: 0, duration: 1, ease: 'bounce.out' })
      .pause();
  }, []);
  //solo se ejecuta el play cuando couter cambia pero no agrega nuevas animaciones y se animaria
  useEffect(() => {
    // if ( counter < maxCount ) return;]

    tl.current.play(0);
  }, [counter]);

  return {
    counter,
    elementToAnimate,
    handleClick,
  };
};
