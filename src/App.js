import Header from './componentes/Header';
import Footer from 'componentes/Footer';
import Carrossel from './componentes/Carrossel';
import Carrinho from 'componentes/Carrinho';
import Cadastro from 'componentes/Cadastro';
import Produtos from 'componentes/Produtos';

function App() {
  return (
    <>
      <Header></Header>
      <Carrossel></Carrossel>
      <Produtos></Produtos>
      <Carrinho></Carrinho>
      <Cadastro></Cadastro>
      <Footer></Footer>
    </>
  );
}

export default App;
