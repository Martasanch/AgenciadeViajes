const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hotelSchema = new Schema({
    nombre: String,
    direccion: String,
    ciudad: String,
    estrellas: Number,
    descripcion: String,
    tarifa: Number,
    imagen: String

})

module.exports = mongoose.model('hotel', hotelSchema)