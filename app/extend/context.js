const ipdb = require('ipip-ipdb')
const { join } = require('path')
const fs = require('fs')
var ipCity = null
module.exports = {
  get ipAddress(){
    var ip = this.request.ip
    if (ipCity == null) {
      var dbFile = join(__dirname, '../', '../', 'ipipfree.ipdb')
      ipCity = new ipdb.City(dbFile)
    }
    info = ipCity.findInfo(ip, 'CN')
    return {
      ip,
      address: info.countryName + info.regionName + info.cityName
    }

  }

}