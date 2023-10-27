import './carrinho.css';
import React from 'react';

const Carrinho = ({ produto, quantidade, aumentarQuantidade, reduzirQuantidade }) => {
  return (
    <div className='item-carrinho'>
      <div className='miniatura'>
        <img src={produto.imagem} alt={produto.nome} />
      </div>
      <div className='info'>
        <p>{produto.nome}</p>
        <div className='controles-quantidade'>
          <button onClick={aumentarQuantidade}>+</button>
          <span>{quantidade}</span>
          <button onClick={reduzirQuantidade}>-</button>
        </div>
      </div>
    </div>
  );
};

export default Carrinho;
