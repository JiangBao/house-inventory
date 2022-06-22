/**
 * inventory db operations
 */
const db = require('../utils/mysql')
const { DEFAULT_CITY, DEFAULT_SOURCE } = require('../constants')

/**
 * add new inventory data
 */
exports.addInventory = async (num, createTime, source = DEFAULT_SOURCE, city = DEFAULT_CITY) => {
  const sql = `INSERT INTO inventory (num, source, city, create_time) VALUES (${num}, '${source}', '${city}', '${createTime}')`
  const res = await db.query(sql)
  
  return res
}

/**
 * get inventory data by city
 */
exports.getDataByCity = async (city = DEFAULT_CITY) => {
  const sql = `SELECT num, source, create_time FROM inventory where city='${city}'`
  const res = await db.query(sql)

  return res
}
