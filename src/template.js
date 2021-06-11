const fs = require('fs')
const ejs = require('ejs');
const path = require('path');
const dependicies = require('./dependicies');
const filePath = path.resolve(process.cwd(), 'index.ejs')
const requirePath = path.resolve(process.cwd(), 'src/require.js')

module.exports = async function generateTemplate(src/** bundle.js地址 */, entry) {
  let html = await ejs.renderFile(filePath, {src});
  const dir = path.dirname(src)
  try {
    fs.accessSync(dir)
  } catch(err) {
    fs.mkdirSync(dir)
  }
  const DependiciesCode = `let dependicies = ${JSON.stringify(dependicies)};\n` 
  const requireTempltae = fs.readFileSync(requirePath, 'utf-8')
  const requireContent = (DependiciesCode + requireTempltae + `\nrequire('${entry}')`)
  console.log('requireContent',  requireContent)
  fs.writeFileSync(src, requireContent, { charcode: 'utf-8' })
  fs.writeFileSync(path.join(path.dirname(filePath), 'index.html'), html, { charcode: 'utf-8' })
}