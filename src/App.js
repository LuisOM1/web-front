import './App.css';
import About from './components/About';
import Inicio from './components/Inicio';
import { Routes, Route} from 'react-router-dom';


function App() {
  return (
    
      < Routes>
        <Route path='/web-front' element={<Inicio/>}></Route>
        <Route path='/about' element={<About/>}></Route>

      </Routes>

  );
}

export default App;
