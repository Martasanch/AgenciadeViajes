import {Link} from 'react-router-dom'
import classes from "./Home.module.css"

const Home = ( )=>{

    return <div className={classes.bg}>
    <div  className={classes.botones}>
    <Link to="hoteles" className="nav-link">
     <button className="btn btn-secondary btn-lg" type="button">
          Ver hoteles
     </button>
    </Link>
    <Link to="users" className="nav-link">
     <button className="btn btn-secondary btn-lg" type="button">
          Ver Clientes
     </button>
    </Link>
    </div>
    <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/2659/posts/32230/image/travel-agency-logo-maker-with-travel-graphics-a1202.jpg"></img>

    </div>
 
}

export default Home