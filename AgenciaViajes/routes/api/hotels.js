const router = require('express').Router();
const Hotel = require('../../models/hotel.model')

//Listar hoteles
// GET http://localhost:3000/api/hotels
router.get('/', async (req, res) => {
   const hotels= await Hotel.find()
    res.json(hotels)

})

//Crear un hotel
// POST http://localhost:3000/api/hotels/crear

router.post('/crear', async (req, res) => {

    try {
        const newHotel = await Hotel.create(req.body)
        res.json(newHotel)
     
    
    } catch (err) {
        res.status(500).json({ error:err.message})
    }
   
})

//Actualizar datos de un hotel por su id
// PUT http://localhost:3000/api/hotels/HOTELID

router.put('/:hotelID', async (req, res) => {
    const hotel= await Hotel.findByIdAndUpdate(req.params.hotelID, req.body, { new: true})
     res.json(hotel)
 })

//Borrar datos de un hotel por su id
// DELETE http://localhost:3000/api/hotels/HOTELID
router.delete('/:hotelID', async (req, res) => {
  
    try {
        const hotel= await Hotel.findByIdAndDelete(req.params.hotelID)
        res.json(hotel)
    } catch (err) {
        res.status(500).json({error: err.message})
    }
    
  
 
 })

module.exports = router