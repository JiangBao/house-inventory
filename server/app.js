/**
 * server entry
 */
const Koa = require('koa')
const Router = require('koa-router')
const schedule = require('node-schedule')
const inventory = require('./utils/inventory')
const houseRouter = require('./routers/house')

const app = new Koa()
const router = new Router()

// schedule jobs
schedule.scheduleJob('0 0 18 * * *', () => {
  inventory.getFromBeiKe()
})

// house api
router.use('/api/house', houseRouter.routes(), houseRouter.allowedMethods())

// load router middlewares
app.use(router.routes()).use(router.allowedMethods())

// listen port
app.listen(4001, () => {
  console.log('server start success at port 4001')
})
