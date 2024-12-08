import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
	darkMode: 'selector',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./lib/**/*.{js,ts,jsx,tsx,mdx}',
		'./mdx-components.tsx',
	],
	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
		extend: {
			colors: {
				blue: {
					100: '#caf0f8',
					200: '#90e0ef',
					300: '#40c9ff',
					400: '#0077b6',
					500: '#0070f3',
					600: '#03045e',
				},
				fuchsia: {
					...colors.fuchsia,
					700: '#e81cff',
				},
				gray: {
					...colors.gray,
					300: '#F9FAFB',
					700: '#333333',
					800: '#0b101e',
					900: '#0E1217',
				},
				white: '#fff',
				black: '#000',
				purple: {
					...colors.purple,
				},
			},
			backgroundSize: {
				'size-200': '200% 200%',
			},
			backgroundPosition: {
				'pos-0': '0% 0%',
				'pos-100': '100% 100%',
			},
			animation: {
				gradient: 'gradient 5s ease infinite',
			},
			keyframes: {
				gradient: {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
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
