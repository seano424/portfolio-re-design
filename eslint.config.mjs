import { defineConfig } from 'eslint/config'
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier'

export default defineConfig([
	{
		extends: [...nextCoreWebVitals, ...nextTypescript, prettier],

		rules: {
			'react/no-unescaped-entities': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-unused-vars': 'warn',
			'react/display-name': 'off',
			'react/prop-types': 'off',
			'react/jsx-key': 'warn',
			'no-console': 'off',
			'no-unused-vars': 'off',
		},
	},
])
