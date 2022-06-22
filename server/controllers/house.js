/**
 * house controllers
 */
const dayjs = require('dayjs')
const inventoryDao = require('../dao/inventory')

/**
 * get house inventory
 * @param {*} ctx 
 */
exports.getInventory = async (ctx) => {
  const res = await inventoryDao.getDataByCity()
  const data = res.map((v) => {
    return {
      [v.source]: v.num,
      day: dayjs(v.create_time).format('YYYY-MM-DD')
    }
  })
  ctx.body = { data }
}