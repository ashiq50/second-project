import globals from 'globals';
import pluginJs from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginPrettier from 'eslint-plugin-prettier';
import prettierRecommended from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      parser: tsParser, // Use TypeScript parser
      globals: {
        ...globals.browser, // Browser globals
        process: 'readonly',
        exports: 'readonly',
        require: 'readonly',
        port: 'readonly', // Add `process` as a readonly global
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: pluginPrettier,
    },
    extends: [
      'plugin:prettier/recommended', // Use the Prettier recommended config
    ],
    rules: {
      ...pluginJs.configs.recommended.rules, // Add ESLint's recommended rules
      ...tsPlugin.configs.recommended.rules, // Add TypeScript's recommended rules
      'no-unused-vars': 'error',
      'no-unused-expressions': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
      'no-undef': 'error',
      '@typescript-eslint/no-require-imports': 'off',
      'prettier/prettier': 'error',
    },
  },
  {
    ignores: ['node_modules/*'],
  },
];
