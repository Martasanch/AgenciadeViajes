const router = require('express').Router();

const User = require('../../models/user.model')

//Envio datos de cliente


//Crear cliente
// POST http://localhost:3000/api/users/crear
router.post('/crear', async (req, res) => {

    try {
        const newUser = await User.create(req.body)
        res.json(newUser)
     
    
    } catch (err) {
        res.status(500).json({ error:err.message})
    }
   
})

//Enlazar los viajes a un usuario
// POST http://localhost:3000/api/users/add


router.post('/add', async (req, res) => {
    const { viaje_id, user_id } = req.body;
    const user = await User.findById(user_id);
    user.viajes.push(viaje_id);
    await user.save();
    res.json(user);
})



// GET http://localhost:3000/api/users
router.get('/', (req, res) =>{
    

User.find()
        .populate('viajes')
        .exec()
        .then(users => res.json(users))
        .catch(error => res.json({ error: error.message }));
    
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