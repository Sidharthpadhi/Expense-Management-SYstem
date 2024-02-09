const express = require('express');
const { loginController, registerController } = require('../controllers/userController');

//router object
const router = express.Router();

//routes
// POST || LOGIN USER
router.post('/login', loginController);

// POST || REGISTER USER
router.post('/register',registerController); 


//ES5 export
module.exports = router
