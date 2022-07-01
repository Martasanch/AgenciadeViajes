
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ListaViajes from './pages/viajes/ListaViajes';
import HomeViajes from './pages/viajes/HomeViajes';
import FormularioViajes from './pages/viajes/FormularioViajes';
import HomeHoteles from './pages/hoteles/HomeHoteles';
import HomeUsers from './pages/users/HomeUsers';
import ListaUsers from './pages/users/ListaUsers';
import FormularioUsers from './pages/users/FormularioUsers';
import Menu from './componentes/Menu';
import Home from './componentes/Home';


function App() {
  return (
    <div className="App">

        <BrowserRouter>
          <Menu/>
          <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='viajes' element={<HomeViajes />}>
              <Route path='' element={<ListaViajes/>}/>
              <Route path='new' element={<FormularioViajes/>}/>
            </Route>
            <Route path='hoteles' element={<HomeHoteles />}/>
            <Route path='users' element={<HomeUsers />}>
              <Route path='' element={<ListaUsers/>}/>
              <Route path='new' element={<FormularioUsers/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
