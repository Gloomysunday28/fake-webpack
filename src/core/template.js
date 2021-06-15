const fs = require('fs')
const ejs = require('ejs');
const path = require('path');
const dependicies = require('./dependicies');
const filePath = path.resolve(process.cwd(), 'index.ejs')
const requirePath = path.resolve(process.cwd(), 'src/template/require.js')
const { resolve } = require('../utils')
const cwd = process.cwd()

module.exports = async function generateTemplate(src/** bundle.js地址 */, config) {
  const { entry, output } = config
  let html = await ejs.renderFile(filePath, {src})// ejs为动态模板, 这里将生成代码路径替换到模板里
  const dir = path.dirname(src)
  try {
    fs.accessSync(dir) // 判断文件夹是否存在
  } catch(err) {
    fs.mkdirSync(dir)
  }

  const dependiciesCode = `let dependicies = ${JSON.stringify(dependicies)};\n` 
  const requireTemplate = fs.readFileSync(requirePath, 'utf-8')
  const entryTransfer = `\nrequire('${resolve(cwd, entry)}')`
  const requireContent = dependiciesCode + requireTemplate + entryTransfer
  
  fs.writeFileSync(src, requireContent, { charcode: 'utf-8' }) // 生成bundle.js
  // 生成模板
  fs.writeFileSync(path.join(resolve(cwd, output.path), 'index.html'), html, { charcode: 'utf-8' })
}