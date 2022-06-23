
import './App.css';
import {BrowserRoute, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
<BrowserRoute>
<Routes>
  <Route path='/viajes'>
<Route path='/' element={<Lista/>}/>
<Route path='/' element={<Formulario/>}/>

  </Route>
</Routes>


</BrowserRoute>
    </div>
  );
}

export default App;
