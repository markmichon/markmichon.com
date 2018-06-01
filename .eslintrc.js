module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  globals: {
      "graphql": true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
    excmaFeatures: {
      experimentalObjectSpread: true,
      impliedStrict: true,
      classes: true,
      jsx: true
    }
  },
  extends: ["airbnb", "plugin:prettier/recommended", "prettier/react", "plugin:jsx-a11y/recommended"],
  rules: {
    indent: [2, 2],
    semi: [2, "never"],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js"]
      }
    ],
    "react/prop-types": [0],
    "jsx-a11y/href-no-hash": 0,
    "jsx-a11y/anchor-is-valid": ["error", {
        components: ["Link"],
        aspects: ["to"]
    }],
    "no-unused-vars": [0],
    quotes: [2, "single", { avoidEscape: true, allowTemplateLiterals: true }],
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        singleQuote: true,
        semi: false
      }
    ]
  }
};
