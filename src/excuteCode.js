const path = require('path')
const fs = require('fs')
const core = require('@babel/core')
const DependiciesTree = require('./dependicesTree')

const dependicies = new DependiciesTree()
// const exports = {}
;(function(){
  const exports = {}
  
  function require(path) {
    console.log('path', path)
    // dependicies(exports, path.join(__dirname, path)) // 收集依赖
    excuteCode(path)
  }

  function excuteCode(route){
    route = path.join(process.cwd(), route)
    const file = fs.readFileSync(route, 'utf-8')
    const code = core.transformSync(file, { 
      minified: true,
      comments: false,
      presets: [['@babel/env', {
        targets: 'defaults',
        modules: 'commonjs',
        corejs: 3,
        useBuiltIns: 'usage'
      }]]
     })
    console.log(code)
    eval(code.code)
  }

  module.exports = excuteCode
})()