import { useForm } from "react-hook-form"
const FormularioUsers = ( )=>{

    const {register, handleSubmit} =useForm()


    const creaCliente = (data) =>{
        fetch('http://localhost:3000/api/users/crear', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(data)
        
            }).then(response => response.json())
             .then(json => console.log(json))
  
    }

    return <div className="container">
    <h2>Nuevo Cliente</h2>
    <form onSubmit={handleSubmit(creaCliente)}>
        <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input type="text" className="form-control" {...register('nombre')}/>
        </div>
        <div className="mb-3">
            <label className="form-label">Apellidos</label>
            <input type="text" className="form-control" {...register('apellidos')}/>
        </div>
        <div className="mb-3">
            <label className="form-label">Dirección</label>
            <input type="text" className="form-control"  {...register('direccion')}/>
        </div>
        <div className="mb-3">
            <label className="form-label">telefono</label>
            <input type="number" className="form-control" {...register('telefono')}/>
        </div>
        <div className="mb-3">
            <label className="form-label">Fecha de nacimiento</label>
            <input type="date" className="form-control" {...register('fnacimiento')}/>
        </div>
        <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="text" className="form-control" {...register('email')}/>
        </div>
        <div className="mb-3">
            <label className="form-label">DNI</label>
            <input type="text" className="form-control" {...register('dni')}/>
        </div>
        <input className="btn btn-secondary btn-lg" type="submit" value="Crear Cliente"/>
    </form>
    </div>
 
}

export default FormularioUsers