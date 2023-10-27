import {useRef} from 'react';
import './Carrossel.css';
import seta from './img/arrow.png'
import Img1 from './img/carrocel-1.png';
import Img2 from './img/carrocel-2.png';
import Img3 from './img/carrocel-3.png';

function App() {
  const carousel = useRef(null);


  //Função de scroll do carrossel
  const seta_esquerda = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  const seta_direita = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  //Fim da função.


  return (
    <div className="container">

      <div className="carousel" ref={carousel}>

        <div className='rosel'>
          <div className="item"><img src={Img1}></img></div>
          <div className="item"><img src={Img2}></img></div>
          <div className="item"><img src={Img3}></img></div>
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

export default App;
