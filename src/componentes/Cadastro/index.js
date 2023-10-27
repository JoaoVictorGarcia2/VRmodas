import './cadastro.css';
import Barra from './SearchBar';
function Cadastro() {

    const handleSearch = (query) => {
        // Implemente a lógica de busca aqui, se necessário
        console.log('Query de busca:', query);
    };
    return (
        <div className='cadastro'>
            <h2 className='subt'>Pré-cadastro:</h2>
            <form className='formulario'>
                <div>
                    <div className='campo'>
                        <label>Primeiro nome</label>
                        <input></input>
                    </div>
                    <div className='campo'>
                        <label>Cidade</label>
                        <input></input>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>Aceito os termos e condições</label>
                    </div>
                    <div>
                        <button type='submit' className='btn_env'>Enviar</button>
                    </div>
                </div>

                <div>
                    <div className='campo'>
                        <label>Segundo nome</label>
                        <input></input>
                    </div> 
                    <div className='campo'>
                        <label>Estado</label>
                        <Barra onSearch={handleSearch} />
                    </div> 
                </div>

                <div>
                    <div className='campo'>
                        <label>E-mail</label>
                        <div>
                            <button className='arroba'>@</button>
                            <input id='email' type='email'></input>
                        </div>
                    </div>
                    <div className='campo'>
                        <label>CEP</label>
                        <input></input>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Cadastro;