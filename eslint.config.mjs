import { defineFlatConfig } from 'eslint-define-config';

export default defineFlatConfig([
  {
    files: ['**/*.ts'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'no-unused-vars': ['warn'],
      'no-console': 'off',
    },
  },
]);
