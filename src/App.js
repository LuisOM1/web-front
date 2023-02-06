import './App.css';
import { Routes, Route} from 'react-router-dom';
import Inicio from './components/Inicio';
import About from './components/About';
import Prices from './components/Prices';
import Contact from './components/Contact';



function App() {
  return (
    
      < Routes>
        <Route path='/web-front' element={<Inicio/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/prices' element={<Prices/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>

  );
}

export default App;
