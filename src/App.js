import './App.css';
import { Routes, Route} from 'react-router-dom';
import Inicio from './Pages/Inicio';
import About from './Pages/About';
import Prices from './Pages/Prices';
import Contact from './Pages/Contact';


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
