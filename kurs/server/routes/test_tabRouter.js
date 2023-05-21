const Router = require('express')
const router = new Router()
const test_tabRouter = require('../controllers/test_tabController')

router.post('/',test_tabRouter.create)
router.get('/',test_tabRouter.getAll)


module.exports = router