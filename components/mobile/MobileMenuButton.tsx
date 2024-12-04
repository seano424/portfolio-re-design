'use client'

import clsx from 'clsx'
import { useState, useRef } from 'react'
import useOutsideClick from '@/hooks/useOutsideClick'
import { motion } from 'framer-motion'
import navLinks from '@/lib/navLinks'
import Link from 'next/link'

export default function MobileMenuButton() {
	const [isOpen, setIsOpen] = useState(false)
	const menuRef = useRef<HTMLDivElement>(null)

	useOutsideClick(menuRef, () => setIsOpen(false))

	return (
		<div ref={menuRef} className="relative flex items-center xl:hidden">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className={clsx(
					'relative -left-2.5 -mr-2.5 bg-transparent p-0',
					'transition-all duration-500 ease-linear hover:scale-105',
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

			{isOpen && (
				<motion.ul
					key="mobile-menu"
					className="absolute -right-4 top-16 flex flex-col items-end gap-4 text-nowrap rounded-lg bg-gray-50 px-10 py-4 shadow-lg dark:bg-gray-900"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.2 }}
					exit={{ opacity: 0, y: 10 }}
				>
					{navLinks.map(({ name, href }, index) => (
						<li key={index}>
							{href ? (
								<Link
									className="hover:text-blue-500 dark:hover:text-blue-400"
									href={href}
								>
									{name}
								</Link>
							) : (
								<button className="hover:text-purple-500 dark:hover:text-purple-400">
									{name}
								</button>
							)}
						</li>
					))}
				</motion.ul>
			)}
		</div>
	)
}
