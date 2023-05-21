const Router = require('express')
const router = new Router()
const companyRouter = require('../controllers/companyController')


router.post('/',companyRouter.create)
router.get('/',companyRouter.getAll)
router.get('/:id',companyRouter.getOne)


module.exports = router