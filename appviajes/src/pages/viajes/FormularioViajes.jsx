import { useForm } from "react-hook-form"
import { useEffect, useState } from 'react'


const FormularioViajes = ( )=>{


    //Recuperar los hoteles
    const [hotels, setHotels] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/api/hotels')
        .then(response =>response.json())
        .then(json => setHotels(json))
    }, [])
    //Recuperar los clientes
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/api/users')
        .then(response =>response.json())
        .then(json => setUsers(json))
    }, [])


    //Enviar los datos del formulario a la bd
    const {register, handleSubmit} =useForm()
    const creaViaje = (data) =>{
        fetch('http://localhost:3000/api/viajes/crear', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(data)
        
            }).then(response => response.json())
             .then(json => console.log(json))
  
    }

    return <div className="container">
    <h2>Nuevo Viaje</h2>
    <form onSubmit={handleSubmit(creaViaje)}>
        <div className="mb-3">
            <label className="form-label">Fecha salida</label>
            <input className="form-control" type="date" {...register('fechaSalida')}/>
        </div>
        <div className="mb-3">
            <label className="form-label">Fecha vuelta</label>
            <input className="form-control" type="date" {...register('fechaVuelta')}/>
        </div>
        <div className="mb-3">
            <label className="form-label">Vuelo Ida</label>
            <input className="form-control" type="text" {...register('IDvueloIda')}/>
        </div>
        <div className="mb-3">
            <label className="form-label">Vuelo Vuelta</label>
            <input className="form-control" type="text" {...register('IDvueloVuelta')}/>
        </div>

        <div className="mb-3">
            <label className="form-label">Hotel</label>
     
            <select className="form-control" name="hotel" {...register('hotel')}>
            {hotels.map(hotel=>(
                <option key={hotel._id} value={hotel._id}>{hotel.nombre}</option>
        
            ))}
            </select>
          
        </div>
        <div className="mb-3">
            <label className="form-label">Cliente</label>
     
            <select className="form-control" name="hotel" {...register('user')}>
            {users.map(user=>(
                <option key={user._id} value={user._id}>{user.nombre}</option>
        
            ))}
            </select>
          
        </div>
 
        <input className="btn btn-secondary btn-lg" type="submit" value="Crear Viaje"/>
    </form>
    </div>
 
}

export default FormularioViajes