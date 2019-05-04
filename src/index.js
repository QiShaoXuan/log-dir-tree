const fs = require('fs')
const logTree = require("console-log-tree")

class logDirTree {
  constructor() {
    this.setting = {}
  }

  parse(path) {
    const realPath = this.getRealPath(path)



    fs.readdirSync(path)

  }

  getRealPath(path) {
    try {
      return fs.realpathSync(path)
    }catch (e) {
      return e
    }
  }
}


module.exports = new logDirTree()
