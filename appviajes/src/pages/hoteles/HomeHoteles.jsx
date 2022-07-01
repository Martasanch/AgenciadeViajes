
import { useEffect, useState } from 'react'
import classes from "./HomeHoteles.module.css"


const HomeHoteles = ( )=>{

         const [hoteles, setHoteles] = useState([])
        useEffect(()=>{
            fetch('http://localhost:3000/api/hotels')
            .then(response =>response.json())
            .then(json => setHoteles(json))
        }, [])

    const borraHotel = async (idHotel) =>{

    //DELETE
    await fetch(`http://localhost:3000/api/hotels/${idHotel}`, {
        method: 'DELETE'
    })


    //get /API/VIAJES

    const response = await fetch('http://localhost:3000/api/hotels')
    const json =await response.json()
    setHoteles(json)

}


    return <div>
            <div className={classes.hoteles}>
                {hoteles.map(hotel=>(
                    <div className={classes.hotel} key={hotel._id}>
                        <h4>{hotel.nombre}</h4>
                        <p><b>Dirección:</b> {hotel.direccion}</p>
                        <p><b>Ciudad:</b> {hotel.ciudad}</p>
                        <p><b>Estrellas:</b> {hotel.estrellas}</p>
                        <p><b>Descripción:</b> {hotel.descripcion}</p>
                        <p><b>Tarifa:</b> {hotel.tarifa}</p>
                        <img style={{width:400 + 'px'}} src={hotel.imagen}></img>
                        <button style={{margin:20 + 'px'}}className="btn btn-danger" onClick ={()=>borraHotel(hotel._id)}>Borrar</button>

                    </div>
                ))}
            </div>
    </div>



 
}

export default HomeHoteles