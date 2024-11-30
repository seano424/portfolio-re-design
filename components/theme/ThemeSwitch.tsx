'use client'

import clsx from 'clsx'
import { useState, useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon, ChevronDown, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'

const ThemeSwitch = () => {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()
	const [isOpen, setIsOpen] = useState(false)
	const divRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		setMounted(true)
	}, [])

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				divRef.current &&
				!divRef.current.contains(event.target as Node)
			) {
				setIsOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () =>
			document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	const handleThemeChange = (theme: string) => {
		setTheme(theme)
		setIsOpen(false)
	}

	return (
		<div ref={divRef} className="relative">
			<button
				{...(mounted && { onClick: () => setIsOpen(!isOpen) })}
				className="flex items-center justify-between gap-1 rounded-lg border bg-gray-200 p-2 dark:border-gray-700 dark:bg-gray-800"
				disabled={!mounted}
				aria-label={mounted ? 'Theme switch' : 'Loading theme switch'}
			>
				{!mounted ? (
					<Loader2 className="h-6 w-6 animate-spin" />
				) : theme === 'dark' ? (
					<Moon className="h-6 w-6" />
				) : (
					<Sun className="h-6 w-6" />
				)}
				<ChevronDown className="h-5 w-5" />
			</button>

			{mounted && isOpen && (
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 10 }}
					className="absolute right-0 top-12"
				>
					<div className="flex flex-col items-start gap-2 text-nowrap rounded-lg bg-gray-200 p-5 dark:bg-gray-800">
						<button
							onClick={() => handleThemeChange('system')}
							className={clsx(
								'flex items-center gap-2',
								theme === 'system' && 'text-blue-500'
							)}
						>
							System
						</button>
						<button
							onClick={() => handleThemeChange('dark')}
							className={clsx(
								'flex items-center gap-2',
								theme === 'dark' && 'text-blue-300'
							)}
						>
							Dark Mode
						</button>
						<button
							onClick={() => handleThemeChange('light')}
							className={clsx(
								'flex items-center gap-2',
								theme === 'light' && 'text-blue-500'
							)}
						>
							Light Mode
						</button>
					</div>
				</motion.div>
			)}
		</div>
	)
}

export default ThemeSwitch
