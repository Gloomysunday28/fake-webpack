const path = require('path')
const baseURL = process.cwd()
const config = require(path.resolve(baseURL, './webpack.config.js'))
const excuteCode = require('./excuteCode')

excuteCode(config.entry)
