const format = require('template-format')
const fetch = window.fetch || require('node-fetch')

class CacheEntity {

  constructor(config) {
    this.config = config
    this.store = Object.keys(config).reduce((acc, entityName) => {
      acc[entityName] = {}
      return acc
    }, {})
  }

  add(entityName, data) {
    if (!(entityName in this.store)) {
      throw new Error(`"${entityName}" has not been initialized`)
    }
    Object.assign(this.store[entityName], data)
  }

  async lookup(entityName, key) {
    if (!(key in this.store[entityName])) {
      const response = await fetch(format(this.config[entityName], { key }))
      this.store[entityName][key] = await response.json()
    }
    return this.store[entityName][key]
  }

}

module.exports = CacheEntity
