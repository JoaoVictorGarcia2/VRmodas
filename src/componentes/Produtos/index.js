import React, { useState } from 'react';
import './produtos.css';
import Carrinho from '../Carrinho'
import Terno from './img/terno.jpg';
import Calca from './img/calca.jpg';
import Sapato from './img/sapato.jpg';
import Relogio from './img/relogio.jpg';

function Produtos() {
  
    const [carrinho, setCarrinho] = useState([]);

    
    const produtos = [
        { nome: 'Terno social preto', imagem: Terno },
        { nome: 'Calça social masculina', imagem: Calca },
        { nome: 'Sapato social preto', imagem: Sapato },
        { nome: 'Relógio', imagem: Relogio }
      ];
      
    const adicionarAoCarrinho = (produto) => {
        const novoCarrinho = [...carrinho];
        const itemExistente = novoCarrinho.find(item => item.produto.nome === produto.nome);
    
        if (itemExistente) {
          itemExistente.quantidade += 1;
        } else {
          novoCarrinho.push({ produto, quantidade: 1 });
        }
    
        setCarrinho(novoCarrinho);
      }

      const aumentarQuantidade = (item) => {
        const novoCarrinho = carrinho.map(carrinhoItem =>
          carrinhoItem === item ? { ...carrinhoItem, quantidade: carrinhoItem.quantidade + 1 } : carrinhoItem
        );
        setCarrinho(novoCarrinho);
      }
    
      const reduzirQuantidade = (item) => {
        const novoCarrinho = carrinho.map(carrinhoItem =>
          carrinhoItem === item ? { ...carrinhoItem, quantidade: carrinhoItem.quantidade - 1 } : carrinhoItem
        ).filter(carrinhoItem => carrinhoItem.quantidade > 0);
        setCarrinho(novoCarrinho);
      }

      const calcularQuantidadeTotal = () => {
        let total = 0;
        carrinho.forEach(item => {
            total += item.quantidade;
        });
        return total;
      }

    return (
        <div className='produtos'>
          <h1>Produtos</h1>

          <div className='loja'>
              {produtos.map(produto => (
                  <div className='card' key={produto.nome}>
                      <div className='imagem'>
                          <img src={produto.imagem} alt = {produto.nome}></img>
                      </div>
                      <div className='info'>   
                          <p>{produto.nome}</p>
                          <button onClick={() => adicionarAoCarrinho(produto)}>Adicionar ao carrinho!</button>
                      </div>
                  </div>
              ))}

          </div>

          <div className='botao_pagina'>
              <button className='arrows1'>&#60;&#60;</button>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button className='arrows2'>&#62;&#62;</button>
          </div>
          <h1 className='titulo_carrinho'>Carrinho:</h1>
          <div className='carrinho_produtos'>
              {carrinho.map(item => (
                  <Carrinho
                      key={item.produto.nome}
                      produto={item.produto}
                      quantidade={item.quantidade}
                      aumentarQuantidade={() => aumentarQuantidade(item)}
                      reduzirQuantidade={() => reduzirQuantidade(item)}
                  />
              ))}
          </div>
          <p className='quantidadetotal quantidade_carrinho'>{calcularQuantidadeTotal()}</p>
        </div>
    )
}

export default Produtos;