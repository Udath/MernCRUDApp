const express = require('express')
const router = express.Router()
const {registerUser,longinUser,getMe} = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login',longinUser)
router.get('/me',protect,getMe)

module.exports = router