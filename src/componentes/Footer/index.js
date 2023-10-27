import './footer.css';

function Footer() {
    return (
        <footer>
          <div className='infotop'>
            <div>
              <p>Conteúdo:</p>
            </div>
            <div>
              <p>Atendimento:</p>
            </div>
          </div>
          <div className='infos'>
            <div>
              <p>Fale conosco</p>
              <p>Meios de pagamento e de frete</p>
              <p>Politica de privacidade</p>
              <p>Politica de Trocas e Devolução</p>
              <p>Quem somos</p>
            </div>
            <div className='col2'>
              <p>Telefone: 4002-8922</p>
              <p>Whatsapp: 11 99229-1289</p>
              <p>Seg. a Sexta 8:00H as 18:00H</p>
              <p>Endereço: Rua dos bobos, nº 0 - SP</p>
            </div>
          </div>
        </footer>
    )
}

export default Footer;