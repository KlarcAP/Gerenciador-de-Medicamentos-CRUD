import './App.css';
import Home from './components/Home.js';
import Sobre from './components/Sobre.js';
import Medicamnetos from './components/Medicamentos.js';
import {BrowserRouter, Routes, Link, Route} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <p>Gerenciador de Medicamentos</p>

      <BrowserRouter>

        <Nav variant='tabs'>
          <Nav.Link as={Link} to="/">Pagina Inicial</Nav.Link>
          <Nav.Link as={Link} to="/medicamentos">Medicamentos</Nav.Link>
          <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
        </Nav>
  
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
