import './header.css';
import Perfil from './img/perfil (1).jpg';
import Lupa from './img/lupa.png';
import Ticket from './img/ticket.png';
import Coracao from './img/coracao.png';
import Carrinho from './img/carrinho.png';
import Red from './img/coracao red.png';


function Header() {
    return (
        <header className="topo">
                   
            <div className='topo_esquerda'>
                <a href='#'><h1>VRmodas</h1></a>
                <input placeholder='O que você procura?'></input>
                <button><img src={Lupa}></img></button>
            </div>

            <div className='topo_direita'>
                <img id='red' src={Red}></img>
                <a href="#"><img src={Ticket}></img></a>
                <a href="#"><img id='coracao' src={Coracao}></img></a>
                <a href="#"><img src={Carrinho}></img></a>
                <div className='perfil'>
                    <img src={Perfil}></img>
                </div>
            </div>
        </header>
    )
}

export default Header;