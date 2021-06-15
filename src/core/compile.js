const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const core = require('@babel/core')
const dependicies = require('./dependicies')

// 递归形成依赖树
function recursion(route, baseURL = path.join(process.cwd(), 'src')) {
  const currentPath = path.join(path.dirname(baseURL), route) // 获取当前文件的绝对路径
  if (dependicies[currentPath]) return dependicies[currentPath] // 若是在依赖树存在 直接返回 表示解析过

  const content = fs.readFileSync(currentPath, 'utf-8')
  const ast = parser.parse(content, {
    sourceType: 'module'
  })
  
  traverse(ast, {
    ImportDeclaration(pathes) {
      var { node: { specifiers = [], source: { value /* 导入路径 */ } } } = pathes

      /**
       * import具有多种形式
       *  1. default
       *  2. name
       *  3. * all
       * 在AST节点里都是ImportDelaration类型, 区别就是specifiers不同
       */
      specifiers.forEach(() => {
        recursion(value, currentPath)
      })
      
      // 修改require里的路径，与依赖树形成映射关系
      pathes.node.source.value = path.join(path.dirname(currentPath)/* 当前文件所在的位置 */, value)
    }
  })

  // 根据上面修改的ast树生成新的代码
  const { code } = core.transformFromAstSync(ast, content, {
    presets: [['@babel/env', {
      modules: 'commonjs'
    }]]
  })

  // 扁平化收集依赖树 key是绝对路径 value是转译的代码
  dependicies[currentPath] = code
}

module.exports = recursion