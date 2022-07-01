import { useEffect, useState } from 'react'
import classes from "./ListaUsers.module.css"

const ListaUsers = ( )=>{

    //Recuperar los clientes

        const [users, setUsers] = useState([])
        useEffect(()=>{
            fetch('http://localhost:3000/api/users')
            .then(response =>response.json())
            .then(json => setUsers(json))
        }, [])

        
    //DELETE
    const borraUser = async (idUser) =>{
    await fetch(`http://localhost:3000/api/users/${idUser}`, {
    method: 'DELETE'
    })

        //get /API/VIAJES
        const response = await fetch('http://localhost:3000/api/users')
        const json =await response.json()
        setUsers(json) 
        }

    


    return <div>
            <h2>Lista de Clientes</h2>
            <div className={classes.users}>
                {users.map(user=>(
                    <div className={classes.user} key={user._id}>
                        <h5>Nombre: {user.nombre}</h5>
                        <h5>Apellidos: {user.apellidos}</h5>
                        <h5>Dirección: {user.direccion}</h5>
                        <h5>Fecha de Nacimiento: {user.fnacimiento}</h5>
                        <h5>email:{user.email}</h5>
                        <h5>dni: {user.dni}</h5>
                        <button className="btn btn-danger" onClick ={()=>borraUser(user._id)}>Borrar</button>

                    </div>
                ))}
            </div>
    </div>
 
}

export default ListaUsers