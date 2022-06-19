const router = require('express').Router();

const User = require('../../models/user.model')

//Envio datos de cliente

// POST http://localhost:3000/api/users/datos
router.post('/datos', async (req, res) => {

    try {
        const newUser = await User.create(req.body)
        res.json(newUser)
     
    
    } catch (err) {
        res.status(500).json({ error:err.message})
    }
   
})

module.exports = router;