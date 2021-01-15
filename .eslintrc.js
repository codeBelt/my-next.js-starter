// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
// https://dev.to/onygami/eslint-and-prettier-for-react-apps-bonus-next-js-and-typescript-3e46

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended', // Make sure this is always the last element in the array.
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
    'newline-after-var': ['error', 'always'],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/jsx-boolean-value': [2, 'always'],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    // Next.js use his own internal link system
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'jsx-a11y/no-onchange': 'off', // ⚠️ Deprecated: This rule is based on reports of behavior of old browsers (eg. IE 10 and below)
  },
};
