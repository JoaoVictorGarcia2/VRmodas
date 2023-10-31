import './carrinho.css';
import React from 'react';

const Carrinho = ({ produto, quantidade, aumentarQuantidade, reduzirQuantidade }) => {
  
  return (
      <div className='item-carrinho'>
        <div className='miniatura'>
          <img className='img_carrinho' src={produto.imagem} alt={produto.nome} />
        </div>
        <div className='quantidade'>
          <p>{produto.nome} | quantidade:</p>
          <div className='btn_quantidade'>
            <button onClick={aumentarQuantidade}>+</button>
            <span>{quantidade}</span>
            <button onClick={reduzirQuantidade}>-</button>
          </div>
        </div>
      </div>
  );
};

export default Carrinho;
