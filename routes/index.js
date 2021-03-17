const router = require('express').Router()
const UserController = require('../controller/userController')
const { authenticate } = require('../middlewares/auth')

router.get('/', (req, res) => {
  res.status(200).json({ messages: 'Hallo Imam ^_^'})
})

router.post('/login', UserController.login)
router.post('/register', UserController.register)
router.use(authenticate)
router.get('/users', UserController.find)
router.delete('/users/:id', UserController.deleteUser)

module.exports = router
