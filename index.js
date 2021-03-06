module.exports = {
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 2018,
  },
  "rules": {
    "indent": [
      "error",
      2,
      { "SwitchCase": 1 }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single",
      {
        "allowTemplateLiterals": true
      }
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-console": "off",
    "no-multi-spaces": [
      "error",
      {
        "ignoreEOLComments": true,
        "exceptions": {
          "Property": true
        }
      }
    ],
    "no-trailing-spaces": "error",
    "block-spacing": "error",
    "brace-style": "error",
    "keyword-spacing": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "lines-between-class-members": [
      "error",
      "always"
    ],
    "comma-dangle": [
      "warn", {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "ignore",
        "exports": "ignore",
        "functions": "ignore"
      }
    ],
    "no-unused-vars": ["error", { "args": "none" }],
    "no-var": "error",
  }
};
