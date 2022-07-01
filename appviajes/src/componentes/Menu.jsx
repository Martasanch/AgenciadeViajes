import {Link} from 'react-router-dom'

const Menu = () =>{

    return  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="viajes" className="nav-link">Viajes</Link>
        </li>
        <li className="nav-item">
          <Link to="viajes/new" className="nav-link">Crear Viaje</Link>
        </li>
        <li className="nav-item">
          <Link to="users" className="nav-link">Clientes</Link>
        </li>
        <li className="nav-item">
          <Link to="users/new" className="nav-link">Registrar Cliente</Link>
        </li>
        <li className="nav-item">
          <Link to="hoteles" className="nav-link">Ver Hoteles</Link>
        </li>
      </ul>
    </div>
  </nav>
      
      

}
    export default Menu;
