import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: ['dist'],
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['lib/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react': react,
    },
    rules: {
      'indent': [
        'error',
        2,
        {
          'offsetTernaryExpressions': true,
          'SwitchCase': 1
        }
      ],
      'linebreak-style': [
        'error',
        'unix'
      ],
      'quotes': [
        'warn',
        'single',
        {
          'avoidEscape': true,
          'allowTemplateLiterals': true
        }
      ],
      'react/prop-types': 0,
      'semi': [
        'error',
        'never'
      ]
    },
  },
)


/*
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends('eslint:recommended', 'plugin:react/recommended'), {
    plugins: {
        react,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
        },

        ecmaVersion: 'latest',
        sourceType: 'module',
    },

    settings: {
        react: {
            version: 'detect',
        },
    },

    rules: {
        indent: ['error', 2, {
            offsetTernaryExpressions: true,
            SwitchCase: 1,
        }],

        'linebreak-style': ['error', 'unix'],

        quotes: ['warn', 'single', {
            avoidEscape: true,
            allowTemplateLiterals: true,
        }],

        'react/prop-types': 0,
        semi: ['error', 'never'],
    },
}];
*/