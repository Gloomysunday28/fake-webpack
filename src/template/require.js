function require(pathRoute) {
  const exports = {} // 经过babel编译后变成了cjs的模块 这里定义了exports以便code里能够取到exports变量
  try {
    eval(dependicies[pathRoute])
  } catch(err) {
    console.error(err)
  }

  return exports
}