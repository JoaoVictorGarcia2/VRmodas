import React, { useState } from 'react';
import './header.css';
import Perfil from './img/perfil (1).jpg';
import Lupa from './img/lupa.png';
import Ticket from './img/ticket.png';
import Coracao from './img/coracao.png';
import Carrinho from './img/carrinho.png';
import Red from './img/coracao red.png';
import Sair from './img/sair.png';


function Header() {

    const [opcoesVisiveis, setOpcoesVisiveis] = useState(false);

    const toggleOpcoesVisiveis = () => {
        setOpcoesVisiveis(!opcoesVisiveis);
      };      

    const [redVisible, setRedVisible] = useState(false);

    const toggleRedVisibility = () => {
      setRedVisible(!redVisible);
    };

    const hideRedHeart = () => {
        setRedVisible(false);
    };

    return (
        <header className="topo">
                   
            <div className='topo_esquerda'>
                <a href='#'><h1>VRmodas</h1></a>
                <input placeholder='O que você procura?'></input>
                <button><img src={Lupa}></img></button>
            </div>

            <div className='topo_direita'>
                <img id='red' src={Red} style={{ display: redVisible ? 'block' : 'none' }} onClick={hideRedHeart}></img>
                <a href="#"><img src={Ticket}></img></a>
                <a href="#" onClick={toggleRedVisibility}><img id='coracao' src={Coracao}></img></a>
                <a href="#"><img src={Carrinho}></img></a>
                <div className='perfil' onClick={toggleOpcoesVisiveis}>
                    <img src={Perfil}></img>
                    {opcoesVisiveis && (
                        <div className='opcoesPerfil'>
                        <p>Ver perfil</p>
                        <p>Alterar senha</p>
                        <div className='sair'>
                            <p>Logout</p>
                            <img id='img_sair' src={Sair}></img>
                        </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header;