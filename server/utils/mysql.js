/**
 * mysql connector module
 */
const mysql = require('mysql')

// connector pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'xxxxxx',
  user: 'xxxxxx',
  password: 'xxxxxx',
  database: 'house_inventory'
})
 
/**
 * query api
 * @param {string}  sql
 * @return {object} Promise
 */
const query = (sql) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, (err, res) => {
      if (err) {
        reject(err)
      }

      resolve(res)
    })
  })
}
 
module.exports = { query }
