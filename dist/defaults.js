const babylon = require("@babel/parser");

module.exports = {
  patterns: ["./**/*.{js,jsx}"],
  gitignore: true,
  encoding: "utf-8",
  parser: babylon,
  parserOptions: {
    allowImportExportEverywhere: true,
    allowAwaitOutsideFunction: true,
    allowReturnOutsideFunction: true,
    allowSuperOutsideMethod: true,
    sourceType: "unambiguous",
    plugins: ["jsx", // "flow",
    "doExpressions", "typescript", "objectRestSpread", // "decorators",
    "classProperties", "classPrivateProperties", "classPrivateMethods", "exportDefaultFrom", "exportNamespaceFrom", "asyncGenerators", "functionBind", "functionSent", "dynamicImport", "numericSeparator", "optionalChaining", "importMeta", "bigInt", "optionalCatchBinding", "throwExpressions", // "pipelineOperator",
    "nullishCoalescingOperator"]
  },
  getLoc: node => node.loc
};