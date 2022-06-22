/**
 * get house inventory
 */
const axios = require('axios')
const dayjs = require('dayjs')
const cheerio = require('cheerio')
const inventoryDao = require('../dao/inventory')

const inventory = {
  // get inventory data from beike
  async getFromBeiKe() {
    try {
      const url = 'https://hz.ke.com/ershoufang'
      const createTime = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')

      const resp = await axios.get(url)
      const $ = cheerio.load(resp.data)
      const num = Number($('.total').find('span').text().trim() || '0')

      await inventoryDao.addInventory(num, createTime, 'beike', 'hangzhou')
      console.log('add inventory success')
    } catch (e) {
      console.error(`inventory.getFromBeike ERROR: ${e}`)
    }
  }
}

module.exports = inventory
