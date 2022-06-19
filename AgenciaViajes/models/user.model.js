const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    nombre: String,
    apellidos: String,
    direccion: String,
    telefono: Number,
    fnacimiento: String,
    email: String,
    dni: String,
    viajes: String
})

module.exports = mongoose.model('user', userSchema)