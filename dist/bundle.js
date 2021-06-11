let dependicies = {"/Users/caijiadi/个人项目/fake-webpack/fake-webpack/example/getName.js":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = getName;\n\nfunction getName(name) {\n  console.log(name);\n}","/Users/caijiadi/个人项目/fake-webpack/fake-webpack/example/index.js":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _getName = _interopRequireDefault(require(\"/Users/caijiadi/\\u4E2A\\u4EBA\\u9879\\u76EE/fake-webpack/fake-webpack/example/getName.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar name = '111';\n(0, _getName[\"default\"])(name);\nvar _default = name;\nexports[\"default\"] = _default;"};
const exports = {} // 导出变量

function require(pathRoute) {
  try {
    eval(dependicies[pathRoute])
  } catch(err) {
    console.error(err)
  }

  return exports
}
require('/Users/caijiadi/个人项目/fake-webpack/fake-webpack/example/index.js')