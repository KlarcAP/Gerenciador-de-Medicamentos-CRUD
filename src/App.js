import './App.css';
import Home from './components/Home.js'
import Sobre from './components/Sobre.js'
import Medicamnetos from './components/Medicamentos.js'
import {BrowserRouter, Routes, Link, Route} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <p>Gerenciador de Medicamentos</p>

      <BrowserRouter>
        <ul>
          <li> <link to="/">Pagina Inicial</link> </li>
          <li> <link to="/medicamentos">Cadastro de Medicamentos</link></li>
          <li> <link to="/sobre">Sobre</link></li>
        </ul>

        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/medicamentos" element={<Medicamnetos />}></Route>
        <Route path="/sobre" element={<Sobre />}></Route>
      </Routes>

      </BrowserRouter>

      
      
    </div>   
  );
}

export default App;
