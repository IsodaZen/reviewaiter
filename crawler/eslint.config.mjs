import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import stylisticTs from '@stylistic/eslint-plugin-ts';

export default [
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
    }, {
        plugins: {
            '@stylistic': stylistic,
            '@stylistic/ts': stylisticTs
        },
        languageOptions: {
            globals: globals.browser
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        ignores: ['**/*.spec.ts'],
        rules: {
            camelcase: ['error'],

            'no-console': ['warn', {
                allow: ['error', 'warn'],
            }],

            '@typescript-eslint/no-unused-vars': ['error', {
                argsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_',
                destructuredArrayIgnorePattern: '^_',
            }],

            'one-var': ['error', 'never'],
            '@stylistic/arrow-parens': ['warn', 'always'],

            '@stylistic/arrow-spacing': ['warn', {
                before: true,
                after: true,
            }],

            '@stylistic/block-spacing': ['warn', 'always'],

            '@stylistic/brace-style': ['warn', '1tbs', {
                allowSingleLine: true,
            }],

            '@stylistic/comma-spacing': ['warn', {
                before: false,
                after: true,
            }],

            '@stylistic/eol-last': ['warn', 'always'],
            '@stylistic/function-call-spacing': ['error', 'never'],

            '@stylistic/indent': ['error', 4, {
                SwitchCase: 1,
            }],

            '@stylistic/jsx-quotes': ['error', 'prefer-double'],

            '@stylistic/key-spacing': ['warn', {
                beforeColon: false,
                afterColon: true,
            }],

            '@stylistic/keyword-spacing': ['warn', {
                before: true,
                after: true,
            }],

            '@stylistic/linebreak-style': ['error', 'unix'],
            '@stylistic/no-tabs': ['error'],
            '@stylistic/no-trailing-spaces': ['error'],
            '@stylistic/object-curly-spacing': ['warn', 'always'],
            '@stylistic/quotes': ['error', 'single'],
            '@stylistic/ts/semi': ['error', 'always'],
            '@stylistic/space-before-blocks': ['warn', 'always'],

            '@stylistic/space-before-function-paren': ['warn', {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            }],

            '@stylistic/switch-colon-spacing': ['warn', {
                before: false,
                after: true,
            }],
        },
    },
];
