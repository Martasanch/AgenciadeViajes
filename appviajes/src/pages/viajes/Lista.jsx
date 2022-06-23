import { useEffect, useState } from 'react'
import classes from "./Lista.module.css"

const Lista = ( )=>{

        const [viajes, setViajes] = useState([])
        useEffect(()=>{
            fetch('http://localhost:3000/api/viajes')
            .then(response =>response.json())
            .then(json => setViajes(json))
        }, [])

const borraViaje = async (idViaje) =>{

    //DELETE
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
                    <div className="viaje" key={viaje._id}>
                        <h4>{viaje.fechaSalida}</h4>
                        <h4>{viaje.fechaVuelta}</h4>
                        <h4>{viaje.IDvueloIda}</h4>
                        <h4>{viaje.IDvueloVuelta}</h4>
                        
                        <button onClick ={()=>borraViaje(viaje._id)}>Borrar</button>

                    </div>
                ))}
            </div>
    </div>
 
}

export default Lista