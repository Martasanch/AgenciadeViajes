
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Lista from './pages/viajes/Lista';
import Home from './pages/viajes/Home';
import Formulario from './pages/viajes/Formulario';


function App() {
  return (
    <div className="App">


<BrowserRouter>
<Routes>
  <Route path='/' element={<Home />}>
  <Route path='/viajes' element={<Lista/>}/>
<Route path='/new' element={<Formulario/>}/>

  </Route>
</Routes>


</BrowserRouter>
    </div>
  );
}

export default App;
