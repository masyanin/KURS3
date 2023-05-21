const Router = require('express')
const router = new Router()
const vacSRouter = require('../controllers/vacSController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/vacansion',checkRole('ADMIN'),vacSRouter.createvac)
router.post('/skill',checkRole('ADMIN'),vacSRouter.createS)
router.get('/vacansion',vacSRouter.getAllvac)
router.get('/skill',vacSRouter.getAllS)


module.exports = router