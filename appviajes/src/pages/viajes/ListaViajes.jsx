import { useEffect, useState } from 'react'
import classes from "./ListaViajes.module.css"
import DayJS from 'react-dayjs';

const ListaViajes = ( )=>{

        const [viajes, setViajes] = useState([])
        useEffect(()=>{
            fetch('http://localhost:3000/api/viajes')
            .then(response =>response.json())
            .then(json => setViajes(json))
        }, [])


   //DELETE
    const borraViaje = async (idViaje) =>{

    await fetch(`http://localhost:3000/api/viajes/${idViaje}`, {
        method: 'DELETE'
    })

    //get /API/VIAJES
    const response = await fetch('http://localhost:3000/api/viajes')
    const json =await response.json()
    setViajes(json)
    }


    return <div>

            <h2>Lista de Viajes</h2>
            <div className={classes.viajes}>
                {viajes.map(viaje=>(
                    <div className={classes.viaje} key={viaje._id}>
                        <h5>Fecha de salida: <DayJS format="DD-MM-YYYY">{viaje.fechaSalida}</DayJS></h5>
                        <h5>Fecha de regreso: <DayJS format="DD-MM-YYYY">{viaje.fechaVuelta}</DayJS></h5>
                        <h5>Localizador vuelo ida: {viaje.IDvueloIda}</h5>
                        <h5>Localizador vuelo vuelta: {viaje.IDvueloVuelta}</h5>
                        <h5>Usuario: {viaje.user._id}</h5>

                        <button className="btn btn-danger" onClick ={()=>borraViaje(viaje._id)}>Borrar</button>

                    </div>
                ))}
            </div>
    </div>
 
}

export default ListaViajes