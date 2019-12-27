module.exports = {
    extends: ['airbnb', 'plugin:@typescript-eslint/recommended', "prettier", "prettier/react"],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {},
        },
    },
    rules: {
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'import/no-extraneous-dependencies': [2, { devDependencies: ['**/test.tsx', '**/test.ts'] }],
        '@typescript-eslint/indent': [2, 2],
        "jsx-a11y/label-has-for": [
            0
        ],
        "linebreak-style": 0,
        "no-confusing-arrow": [
            0
        ],
        "prettier/prettier": [
            "error",
            {
                "singleQuote": true
            }
        ]
    },
    env: {
        "browser": true,
        "node": true

    },
};