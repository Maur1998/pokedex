import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './views/Home';
import { Pokemon } from './views/Pokemon';
import { Informacion } from './views/Informacion';

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokedex' element={<Pokemon />} />
        <Route path='/pokedex/:nombre' element={<Informacion />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
