module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true,
    },
    extends: [
        "eslint:recommended",    "plugin:react/recommended"
    ],
    globals: {
      "React": "writable"
    },
    parser: 'babel-eslint',
    plugins: ['react-hooks'],
    rules: {
        "react/react-in-jsx-scope": "off",
      'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
      'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'off',
      'no-console': 'warn',
      'no-unused-vars': 'warn',
    },
  }
