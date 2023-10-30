import React, { useState } from 'react';
import './cadastro.css';
function Cadastro() {

    const primeiroNomeRef = React.createRef();
    const segundoNomeRef = React.createRef();
    const emailRef = React.createRef();
    const cidadeRef = React.createRef();
    const cepRef = React.createRef();
    const aceitoTermosRef = React.createRef();
    const [estadoSelecionado, setEstadoSelecionado] = useState(0);

    const handleEstadoChange = (e) => {
        setEstadoSelecionado(e.target.value);
      };

    const handleSubmit = (e) => {
        e.preventDefault();
      
        const primeiroNome = primeiroNomeRef.current.value;
        const segundoNome = segundoNomeRef.current.value;
        const email = emailRef.current.value;
        const cidade = cidadeRef.current.value;
        const cep = cepRef.current.value;
        const aceitoTermos = aceitoTermosRef.current.checked;
      
        if (primeiroNome && segundoNome && email && cidade && cep && estadoSelecionado !== 0 && aceitoTermos ) {
            alert('Cadastro realizado com sucesso');
            window.location.reload(); 
        } else if (!aceitoTermos) {
            alert('Preencha todos os campos');
        } else if (estadoSelecionado === 0) {
            alert('Escolha um estado'); 
        } else {
            alert('Aceite os termos e condições');
        }
      };
      
      
    return (
        <div className='cadastro'>
            <h2 className='subt'>Pré-cadastro:</h2>
            <form className='formulario' onSubmit={handleSubmit}>
                <div className='campo'>
                    <div>
                        <label>Primeiro nome</label>
                        <input type='text' ref={primeiroNomeRef} />
                   </div>
                    <div>
                        <label>Segundo nome</label>
                        <input type='text' ref={segundoNomeRef} />
                    </div>
                    <div>
                        <label>E-mail</label>
                        <div className='campo'>
                            <button className='arroba'>@</button>
                            <input type='email' ref={emailRef} />
                        </div>
                    </div>
                </div>

                <div className='campo'>
                    <div>
                        <label>Cidade</label>
                        <input type='text' ref={cidadeRef} id='cidade' />
                    </div>
                    <div>
                        <label>Estado</label>
                        <select id='diminuir' className='buscainput' onChange={handleEstadoChange} value={estadoSelecionado}>
                            <option value="0">Choose...</option>
                            <option value="1">Acre</option>
                            <option value="2">Alagoas</option>
                            <option value="3">Amapá</option>
                            <option value="4">Amazonas</option>
                            <option value="5">Bahia</option>
                            <option value="6">Ceará</option>
                            <option value="7">Distrito Federal</option>
                            <option value="8">Espírito Santo</option>
                            <option value="9">Goiás</option>
                            <option value="10">Maranhão</option>
                            <option value="11">Mato Grosso</option>
                            <option value="12">Mato Grosso do Sul</option>
                            <option value="13">Minas Gerais</option>
                            <option value="14">Pará</option>
                            <option value="15">Paraíba</option>
                            <option value="16">Paraná</option>
                            <option value="17">Pernambuco</option>
                            <option value="18">Piauí</option>
                            <option value="19">Rio de Janeiro</option>
                            <option value="20">Rio Grande do Norte</option>
                            <option value="21">Rio Grande do Sul</option>
                            <option value="22">Rondônia</option>
                            <option value="23">Roraima</option>
                            <option value="24">Santa Catarina</option>
                            <option value="25">São Paulo</option>
                            <option value="26">Sergipe</option>
                            <option value="27">Tocantins</option>
                        </select>
                    </div>
                    <div>
                        <label>CEP</label>
                        <input type='text' ref={cepRef} id='cep' />
                    </div>
                </div>
                <div>
                    <input type='checkbox' ref={aceitoTermosRef} id='aceitoTermos' />
                    <label>Aceito os termos e condições</label>
                </div>
                <div>
                    <button type='submit' className='btn_env' name='Enviar'>Enviar</button>
                </div>

            </form>

        </div>
    )
}

export default Cadastro;