const router = require('express').Router();
const Hotel = require('../../models/hotel.model')


// GET http://localhost:3000/api/hotels
router.get('/', async (req, res) => {
   const hotels= await Hotel.find()
    res.json(hotels)

})


// POST http://localhost:3000/api/hotels

 


// PUT http://localhost:3000/api/hotels/HOTELID



module.exports = router