import { useForm } from "react-hook-form"


const Formulario = ( )=>{

    const {register, handleSubmit} =useForm()


    const creaViaje = (data) =>{
        fetch('http://localhost:3000/api/viajes/crear', {
            method: 'POST',
            headers: { 'content-type': 'application json'},
            body: JSON.stringify(data)
        
            }).then(response => response.json())
             .then(json => console.log(json))
  
    }

    return <div>
    <h2>Nuevo Viaje</h2>
    <form onSubmit={handleSubmit(creaViaje)}>
        <div>
            <label>Fecha salida</label>
            <input type="text" {...register('salida')}/>
        </div>
        <div>
            <label>Fecha vuelta</label>
            <input type="text" {...register('vuelta')}/>
        </div>
        <div>
            <label>Vuelo Ida</label>
            <input type="text" {...register('vueloida')}/>
        </div>
        <div>
            <label>Vuelo Vuelta</label>
            <input type="text" {...register('vuelovuelta')}/>
        </div>
        <div>
            <label>Hotel</label>
            <input type="text" {...register('hotel')}/>
        </div>
        <input type="submit" value="Enviar"/>
    </form>
    </div>
 
}

export default Formulario