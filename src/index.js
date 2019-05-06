const fs = require('fs')
const path = require("path")
const logTree = require("console-log-tree")

class logDirTree {
  constructor() {
    this.setting = {}
  }

  parse(filepath, getStat = true) {
    let realPath
    try {
      realPath = fs.realpathSync(filepath)
    } catch (e) {
      return console.error(e)
    }

    return {
      name: filepath,
      children: this.getDirTree(filepath, getStat)
    }
  }

  log(filepath) {
    logTree.log(this.parse(filepath, false))
  }


  getDirTree(filepath, getStat = true) {
    const children = fs.readdirSync(filepath)
    let arr = []
    children.forEach((filename) => {
      const pathNow = path.join(filepath, filename)
      const stat = fs.statSync(pathNow)

      let obj = {}

      if (stat.isDirectory()) {
        obj.name = filename
        obj.children = this.getDirTree(pathNow)
      }

      if (stat.isFile()) {
        obj.name = filename
      }


      arr.push(getStat ? Object.assign(stat, obj) : obj)
    })

    return arr
  }
}


module.exports = new logDirTree()
