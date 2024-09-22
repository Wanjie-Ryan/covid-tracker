module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "prettier"
  ],
  plugins: ['prettier'],
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'prettier/prettier': 'error', // Treat Prettier issues as ESLint errors
    'no-trailing-spaces': 'off',
    'indent': 'off',

    // Disable blank lines after block statements
    'padded-blocks': 'off',

    // Disable warnings about multiple blank lines
    'no-multiple-empty-lines': 'off',
  },
};
