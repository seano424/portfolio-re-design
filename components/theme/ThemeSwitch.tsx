'use client'

import clsx from 'clsx'
import { useState, useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon, ChevronDown, Loader2, Monitor } from 'lucide-react'
import { motion } from 'framer-motion'
import useOutsideClick from '@/hooks/useOutsideClick'

const themeOptions = [
	{
		name: 'system',
		value: 'system',
	},
	{
		name: 'dark mode',
		value: 'dark',
	},
	{
		name: 'light mode',
		value: 'light',
	},
]

const ThemeSwitch = () => {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()
	const [isOpen, setIsOpen] = useState(false)
	const divRef = useRef<HTMLDivElement>(null)

	useOutsideClick(divRef, () => setIsOpen(false))

	useEffect(() => {
		setMounted(true)
	}, [])

	const handleThemeChange = (theme: string) => {
		setTheme(theme)
		setIsOpen(false)
	}

	return (
		<div ref={divRef} className="relative">
			<button
				{...(mounted && { onClick: () => setIsOpen(!isOpen) })}
				className="group flex cursor-pointer items-center justify-between gap-1 rounded-lg border border-gray-50/0 bg-gray-200 p-2 dark:border-gray-700 dark:bg-gray-800"
				disabled={!mounted}
				aria-label={mounted ? 'Theme switch' : 'Loading theme switch'}
			>
				{!mounted ? (
					<Loader2 className="h-6 w-6 animate-spin" />
				) : theme === 'dark' ? (
					<Moon className="h-6 w-6" />
				) : (
					<Sun className="h-6 w-6 transition-all duration-200 ease-linear group-hover:text-orange-500" />
				)}
				<ChevronDown
					className={clsx(
						'h-5 w-5 transition-all duration-200 ease-linear',
						isOpen && 'rotate-180',
						theme !== 'dark' && mounted
							? 'group-hover:text-orange-500 dark:group-hover:text-orange-500'
							: ''
					)}
				/>
			</button>

			{mounted && isOpen && (
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 10 }}
					transition={{ duration: 0.2 }}
					className="absolute top-16 right-0"
				>
					<div className="flex flex-col items-start rounded-lg bg-gray-200 text-xl text-nowrap dark:bg-gray-800">
						{themeOptions.map((themeOption) => (
							<button
								key={themeOption.value}
								onClick={() =>
									handleThemeChange(themeOption.value)
								}
								className={clsx(
									'flex items-center gap-2 hover:text-fuchsia-700 dark:hover:text-blue-300',
									'transition-all duration-200 ease-linear',
									'w-full cursor-pointer px-4 py-3 capitalize',
									theme === themeOption.value &&
										'text-fuchsia-700 dark:text-blue-300'
								)}
							>
								{themeOption.value === 'system' && (
									<Monitor className="h-5 w-5" />
								)}
								{themeOption.value === 'dark' && (
									<Moon className="h-5 w-5" />
								)}
								{themeOption.value === 'light' && (
									<Sun className="h-5 w-5" />
								)}
								{themeOption.name}
							</button>
						))}
					</div>
				</motion.div>
			)}
		</div>
	)
}

export default ThemeSwitch
