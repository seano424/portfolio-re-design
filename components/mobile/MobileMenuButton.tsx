'use client'

import clsx from 'clsx'
import { useMobileMenu } from '@/contexts/MobileMenuContext'

export default function MobileMenuButton() {
	const { isOpen, setIsOpen } = useMobileMenu()

	return (
		<button
			onClick={() => {
				setIsOpen(!isOpen)
			}}
			className={clsx(
				'relative -left-2.5 -mr-2.5 bg-transparent p-0',
				'scale-90 transition-all duration-500 ease-linear hover:scale-100',
				isOpen && 'active'
			)}
			aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
		>
			<span className="sr-only">
				{isOpen ? 'Close Menu' : 'Open Menu'}
			</span>
			<svg
				className={`h-[50px] w-[50px] cursor-pointer duration-300 ${
					isOpen ? 'rotate-45' : ''
				}`}
				viewBox="0 00 100 100"
			>
				<defs>
					<linearGradient
						id="menuGradient"
						gradientUnits="userSpaceOnUse"
						x1="30"
						y1="50"
						x2="70"
						y2="50"
					>
						<stop offset="0%" stopColor="#3B82F6" />{' '}
						{/* blue-500 */}
						<stop offset="50%" stopColor="#A855F7" />{' '}
						{/* purple-500 */}
						<stop offset="100%" stopColor="#A855F7" />{' '}
						{/* purple-500 */}
					</linearGradient>
				</defs>
				<path
					className={`origin-center fill-none duration-300 [stroke-linecap:round] ${
						isOpen ? '[stroke-dashoffset:-64px]' : ''
					}`}
					d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
					strokeWidth="5"
					stroke="url(#menuGradient)"
					style={{ strokeDasharray: '40 160' }}
				/>
				<path
					className={`origin-center fill-none duration-300 [stroke-linecap:round] ${
						isOpen ? 'rotate-90' : ''
					}`}
					d="m 30,50 h 40"
					strokeWidth="5"
					stroke="url(#menuGradient)"
					style={{ strokeDasharray: '40 142' }}
				/>
				<path
					className={`origin-center fill-none duration-300 [stroke-linecap:round] ${
						isOpen ? '[stroke-dashoffset:-64px]' : ''
					}`}
					d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
					strokeWidth="5"
					stroke="url(#menuGradient)"
					style={{ strokeDasharray: '40 85' }}
				/>
			</svg>
		</button>
	)
}
