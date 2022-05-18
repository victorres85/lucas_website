import '../src/css/App.css';
import '../src/css/contato.css';
import '../src/css/modal.css';
import '../src/css/style.css';
import Televisao from './Components/Televisao';
import Teatro from './Components/Teatro';
import Cinema from './Components/Cinema';
import Rodape from './Components/Rodape';
import Navbar from './Components/Navbar';
import Contato from './Components/Contato';
import Sobre from './Components/Sobre';
import Publicidade from './Components/Publicidade';


function App() {
  return (
    <div className="App">
      <header className="App-header" id='sobre'>
        <Navbar />
      </header>
      <body className='body' >
        <div className='sobre_01' >
          <div className='sobre '>
            <Sobre />
          </div>
        </div>
        <div className="televisao" id="televisao">
          <div className='televisao_quadrado'></div>
          <h3 className='sobreposto'>Televisão</h3>
          <Televisao />
        </div>
        <div className="teatro" id="teatro">
          <div className='align-bottom'>
            <div className='teatro_quadrado'></div>
            <h3 className='sobreposto'>Teatro</h3>
            <Teatro />
          </div>
        </div>
        <div className="cinema" id="cinema">
          <div className='cinema_quadrado'></div>
          <h3 className='sobreposto'>Cinema</h3>

          <Cinema />
        </div>
        <div className="publicidade" id="publicidade">
          <div className='publicidade_quadrado'></div>
          <h3 className='sobreposto'>Publicidade</h3>

          <Publicidade />
        </div>
        <div className="contato" >
          <div className='contato_quadrado' id="contato"></div>
          <h3 className='sobreposto contato_txt'>Contato</h3>
          <Contato />
        </div>

      </body>
      <footer>
        <div className='rodape'>

          <Rodape />
        </div>
      </footer>
    </div >
  );
}

export default App;
