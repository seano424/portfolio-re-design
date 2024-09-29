import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./lib/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		container: {
			center: true,
		},
		extend: {
			backgroundSize: {
				'size-200': '200% 200%',
			},
			backgroundPosition: {
				'pos-0': '0% 0%',
				'pos-100': '100% 100%',
			},
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
				gray: {
					...colors.gray,
					700: '#333333',
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
