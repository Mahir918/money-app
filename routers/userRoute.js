const express = require('express');
const router = express.Router()

const {login,register,allUser} = require('../controller/userController')

router.post('/register',register)

router.post('/login',login)

router.get('/all', allUser)

module.exports = router