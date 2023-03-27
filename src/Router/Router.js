
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Inicio from '../Pages/Inicio';
import About from '../Pages/About';
import Prices from '../Pages/Prices';
import Contact from '../Pages/Contact';


function Router() {
  return (
    
    <BrowserRouter>
      < Routes>
        <Route path="/web-front" element={<Navigate to="/" />}/>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/prices' element={<Prices/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default Router;