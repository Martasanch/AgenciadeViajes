const router = require('express').Router();

const User = require('../../models/user.model')

//Envio datos de cliente


//Crear cliente
// POST http://localhost:3000/api/users/crear
router.post('/crear', async (req, res) => {

    try {
        const newUser = await User.create(req.body)
/*         newUser.viajes.push(¿¿¿¿) */
        res.json(newUser)
     
    
    } catch (err) {
        res.status(500).json({ error:err.message})
    }
   
})

//Recuperar lista de clientes

// GET http://localhost:3000/api/users
router.get('/', async(req, res) =>{
    
    try {
        const recUser = await User.find()
        res.json(recUser)
    
    } catch (err) {
        res.status(500).json({ error:err.message})
    }
    


});

//Actualizar datos de un cliente por su id
// PUT http://localhost:3000/api/users/USERID
router.put('/:userID', async (req, res) => {
    const user= await User.findByIdAndUpdate(req.params.userID, req.body, { new: true})
     res.json(user)
 })

//Borrar datos de un cliente por su id
// DELETE http://localhost:3000/api/users/USERID
router.delete('/:userID', async (req, res) => {
  
    try {
        const user= await User.findByIdAndDelete(req.params.userID)
        res.json(user)
    } catch (err) {
        res.status(500).json({error: err.message})
    }
    
  
 
 })


module.exports = router;