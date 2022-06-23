const mongoose = require('mongoose')
const Schema = mongoose.Schema


const viajeSchema = new Schema({
    fechaSalida: Date,
    fechaVuelta: Date,
    IDvueloIda: String,
    IDvueloVuelta: String,
/*     hotel:[{ type: Schema.Types.ObjectId, ref: 'hotel' }] */
})

module.exports = mongoose.model('viaje', viajeSchema)