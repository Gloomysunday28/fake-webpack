const exports = {} // 导出变量

function require(pathRoute) {
  try {
    eval(dependicies[pathRoute])
  } catch(err) {
    console.error(err)
  }

  return exports
}