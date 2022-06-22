/**
 * house routers
 */
const Router = require('koa-router')
const houseController = require('../controllers/house')

const router = new Router()

/**
 * get inventory by city and data source
 * @param {string} city
 * @param {string} source
 */
router.get('/inventory', houseController.getInventory)

module.exports = router
