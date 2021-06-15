const path = require('path')
const open = require('opn')
const compile = require('./core/compile')
const generateTemplate = require('./core/generate')
const { resolve } = require('./utils')

const cwd = process.cwd()
const config = require(path.join(cwd, 'webpack.config.js'))

const { entry, output } = config
compile(entry) // 编译代码 生成依赖树
generateTemplate(resolve(cwd, output.path, output.filename), config)
open(resolve(cwd, output.path, 'index.html')) // 打开新的模板