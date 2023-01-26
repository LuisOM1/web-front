import './App.css';
import { Routes, Route} from 'react-router-dom';
import Inicio from './components/Inicio';
import About from './components/About';
import Prices from './components/Prices';
import Contact from './components/Contact';
import Login from './components/Login';



function App() {
  return (
    
      < Routes>
        <Route path='/web-front' element={<Inicio/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/prices' element={<Prices/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>

  );
}

export default App;
