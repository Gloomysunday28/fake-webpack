const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const core = require('@babel/core')
const dependicies = require('./dependicies')
let baseURL = path.join(process.cwd(), 'src')

function recursion(route) {
  const currentPath = path.join(path.dirname(baseURL), route)
  if (dependicies[currentPath]) return dependicies[currentPath]

  const content = fs.readFileSync(currentPath, 'utf-8')
  baseURL = currentPath
  const ast = parser.parse(content, {
    sourceType: 'module'
  })
  
  traverse(ast, {
    ImportDeclaration(pathes) {
      var { node: { specifiers = [], source: { value /* 导入路径 */ } } } = pathes

      specifiers.forEach(() => {
        recursion(value)
      })
      
      console.log(111, path.join(path.dirname(baseURL), value))
      pathes.node.source.value = path.join(path.dirname(baseURL), value)
    }
  })

  const { code } = core.transformFromAstSync(ast, content, {
    presets: [['@babel/env', {
      modules: 'commonjs'
    }]]
  })

  dependicies[currentPath] = code
}

module.exports = recursion