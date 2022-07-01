const router = require('express').Router();

const Viaje = require('../../models/viaje.model')


//Listar Viajes
// GET http://localhost:3000/api/viajes
router.get('/', (req, res) => {
    Viaje.find()
    .populate('user').populate('hotel')
    .exec()
    .then(viajes =>{
        res.json(viajes)
    })
    .catch(err => {
        res.status(500).json({ error: err.message });
    });
     
 
 })
 
 //Crear un Viaje
 // POST http://localhost:3000/api/viajes/crear
 
 router.post('/crear', async (req, res) => {
 
     try {
         const newViaje = await (await Viaje.create(req.body))
         res.json(newViaje)
      
     
     } catch (err) {
         res.status(500).json({ error:err.message})
     }
    
 })
 
 //Actualizar datos de un Viaje por su id
 // PUT http://localhost:3000/api/viajes/ViajeID
 
 router.put('/:viajeID', async (req, res) => {
     const viaje= await Viaje.findByIdAndUpdate(req.params.viajeID, req.body, { new: true})
      res.json(viaje)
  })
 
 //Borrar datos de un Viaje por su id
 // DELETE http://localhost:3000/api/viajes/ViajeID
 router.delete('/:viajeID', async (req, res) => {
   
     try {
         const viaje= await Viaje.findByIdAndDelete(req.params.viajeID)
         res.json(viaje)
     } catch (err) {
         res.status(500).json({error: err.message})
     }
     
   
  
  })
 


module.exports = router;