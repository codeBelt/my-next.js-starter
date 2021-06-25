// https://nextjs.org/docs/basic-features/eslint

module.exports = {
  extends: ['next', 'next/core-web-vitals', 'prettier'],
  rules: {
    'import/no-anonymous-default-export': 'off',
    'newline-after-var': ['error', 'always'],
    'react/jsx-boolean-value': [2, 'always'],
  },
};
