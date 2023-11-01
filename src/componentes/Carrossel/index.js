import {useRef, useEffect, useState} from 'react';
import './Carrossel.css';
import seta from './img/arrow.png'
import Img1 from './img/carrocel-1.png';
import Img2 from './img/carrocel-2.png';
import Img3 from './img/carrocel-3.png';

function Carrosel() {
  const carousel = useRef(null);
  const [isLastImage, setIsLastImage] = useState(false);


  //Função de scroll do carrossel
  const seta_esquerda = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  const seta_direita = (e) => {
    e.preventDefault();
    if (carousel.current.scrollLeft + carousel.current.offsetWidth >= carousel.current.scrollWidth) {
      setIsLastImage(true);
    } else {
      setIsLastImage(false);
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
  };
  //Fim da função.

  useEffect(() => {
    const interval = setInterval(() => {
      if (isLastImage) {
        setIsLastImage(false);
        carousel.current.scrollLeft = 0; // Volta para a primeira imagem
      } else {
        carousel.current.scrollLeft += carousel.current.offsetWidth;
      }
    }, 4000);

    return () => clearInterval(interval);
    }, [isLastImage]);

  return (
    <div className="container">

      <div className="carousel" ref={carousel}>

        <div className='rosel' ref={carousel}>
          <div className="item"><img src={Img1} alt="Imagem 1"></img></div>
          <div className="item"><img src={Img2} alt="Imagem 2"></img></div>
          <div className="item"><img src={Img3} alt="Imagem 3"></img></div>
        </div>
        
      </div>
      <div className="buttons">
        <button onClick={seta_esquerda}>
          <img className='arrow1' src={seta} alt="Scroll Left" />
        </button>
        <button onClick={seta_direita}>
          <img className='arrow2' src={seta} alt="Scroll Right" />
        </button>
      </div>
    </div>
  );
}

export default Carrosel;
