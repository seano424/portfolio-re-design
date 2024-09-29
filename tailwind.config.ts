import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
		extend: {
			colors: {
				primary: {
					100: '#caf0f8',
					200: '#90e0ef',
					300: '#40c9ff',
					400: '#0077b6',
					500: '#0070f3',
					600: '#03045e',
				},
				secondary: {
					100: '#e81cff',
				},
			},
		},
		debugScreens: {
			position: ['bottom', 'right'],
			style: {
				backgroundColor: '#262626e6',
				borderRadius: '4px',
				boxShadow: 'none',
				color: 'white',
				padding: '8px',
				margin: '18px 16px',
				opacity: '100%',
			},
		},
	},
	plugins: [require('tailwindcss-debug-screens')],
}
export default config
