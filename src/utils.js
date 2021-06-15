const path = require('path')

module.exports = {
  resolve() {
    return path.resolve.apply(path, arguments)
  }
}