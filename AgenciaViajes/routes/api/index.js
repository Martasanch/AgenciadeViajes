const router = require('express').Router();


const apiUsersRouter = require('./users');
const apiHotelsRouter = require('./hotels');
const apiViajesRouter = require('./viajes');



router.use('/hotels', apiHotelsRouter)
router.use('/users', apiUsersRouter)
router.use('/viajes', apiViajesRouter)


module.exports = router;