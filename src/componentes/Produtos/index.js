import './produtos.css';
import Terno from './img/terno.jpg';
import Calca from './img/calca.jpg';
import Sapato from './img/sapato.jpg';
import Relogio from './img/relogio.jpg';

function Produtos() {
    return (
        <div className='produtos'>
            <h1>Produtos</h1>

            <div className='loja'>
                <div className='card'>
                    <div className='imagem'>
                        <img src={Terno}></img>
                    </div>
                    <div className='info'>
                        <p>Terno social preto</p>
                        <button>Adicionar ao carrinho!</button>
                    </div>
                </div>

                <div className='card'>
                    <div className='imagem'>
                        <img src={Calca}></img>
                    </div>
                    <div className='info'>
                        <p>Calça social masculina</p>
                        <button>Adicionar ao carrinho!</button>
                    </div>
                </div>

                <div className='card'>
                    <div className='imagem'>
                        <img src={Sapato}></img>
                    </div>
                    <div className='info'>
                        <p>Sapato social preto</p>
                        <button>Adicionar ao carrinho!</button>
                    </div>
                </div>

                <div className='card'>
                    <div className='imagem'>
                        <img src={Relogio}></img>
                    </div>
                    <div className='info'>
                        <p>Relógio</p>
                        <button>Adicionar ao carrinho!</button>
                    </div>
                </div>
            </div>
            <div className='botao_pagina'>
                <button className='arrows1'>&#60;&#60;</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button className='arrows2'>&#62;&#62;</button>
            </div>
        </div>
    )
}

export default Produtos;