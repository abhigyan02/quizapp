module.exports = {
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module"
    },
    rules: {
      "no-unused-vars": "off",  // Disables the no-unused-vars rule for JavaScript files
      "@typescript-eslint/no-unused-vars": "off"  // Disables the no-unused-vars rule for TypeScript files
    }
  }
  