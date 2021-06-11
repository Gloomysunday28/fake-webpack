const path = require('path')
const cwd = process.cwd()
const config = require(path.join(cwd, 'webpack.config.js'))
const compile = require('./compile')
const generateTemplate = require('./template')
const filePath = path.resolve(process.cwd(), 'index.html')
const open = require('opn')

const { entry, output } = config
compile(entry)
generateTemplate(path.resolve(process.cwd(), output.path, output.filename), path.resolve(process.cwd(), entry))
// open(filePath)