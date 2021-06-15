let dependicies = {"/Users/caijiadi/个人项目/fake-webpack/fake-webpack/example/getAge.js":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.age2 = exports.age = void 0;\nvar age = 2;\nexports.age = age;\nvar age2 = 3;\nexports.age2 = age2;","/Users/caijiadi/个人项目/fake-webpack/fake-webpack/example/src/getSex.js":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = 'man';\nexports[\"default\"] = _default;","/Users/caijiadi/个人项目/fake-webpack/fake-webpack/example/getName.js":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = getName;\n\nvar _getAge = require(\"/Users/caijiadi/\\u4E2A\\u4EBA\\u9879\\u76EE/fake-webpack/fake-webpack/example/getAge.js\");\n\nvar _getSex = _interopRequireDefault(require(\"/Users/caijiadi/\\u4E2A\\u4EBA\\u9879\\u76EE/fake-webpack/fake-webpack/example/src/getSex.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nconsole.log('age', _getAge.age);\nconsole.log(_getAge.age2);\nconsole.log('sex-getName', _getSex[\"default\"]);\n\nfunction getName(name) {\n  console.log(name);\n}"};
function require(pathRoute) {
  const exports = {} // 经过babel编译后变成了cjs的模块 这里定义了exports以便code里能够取到exports变量
  try {
    eval(dependicies[pathRoute])
  } catch(err) {
    console.error(err)
  }

  return exports
}
require('/Users/caijiadi/个人项目/fake-webpack/fake-webpack/example/getName.js')