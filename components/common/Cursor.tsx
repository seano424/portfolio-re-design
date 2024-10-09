'use client'

import clsx from 'clsx'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CursorProps {
	enabled?: boolean
}

export default function Cursor({ enabled = true }: CursorProps) {
	const [position, setPosition] = useState({ x: 0, y: 0 })
	const [hidden, setHidden] = useState(false)
	const [linkHovered, setLinkHovered] = useState(false)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		if (typeof window === 'undefined' || !enabled) return

		const isMobile = /Android|Mobi/i.test(navigator.userAgent)
		if (isMobile) return

		setMounted(true)

		const mMove = (el: MouseEvent) => {
			requestAnimationFrame(() => {
				setPosition({ x: el.clientX, y: el.clientY })
			})
		}

		const mEnter = () => setHidden(false)
		const mLeave = () => setHidden(true)

		const handleLinkHoverEvents = () => {
			const elements = document.querySelectorAll(
				'a, button, .cursor-hover'
			)
			const mOver = () => setLinkHovered(true)
			const mOut = () => setLinkHovered(false)

			elements.forEach((el) => {
				el.addEventListener('mouseover', mOver)
				el.addEventListener('mouseout', mOut)
			})

			return () => {
				elements.forEach((el) => {
					el.removeEventListener('mouseover', mOver)
					el.removeEventListener('mouseout', mOut)
				})
			}
		}

		document.addEventListener('mousemove', mMove)
		document.addEventListener('mouseenter', mEnter)
		document.addEventListener('mouseleave', mLeave)

		const cleanupLinkHover = handleLinkHoverEvents()

		return () => {
			document.removeEventListener('mousemove', mMove)
			document.removeEventListener('mouseenter', mEnter)
			document.removeEventListener('mouseleave', mLeave)
			cleanupLinkHover()
		}
	}, [enabled])

	return (
		<AnimatePresence>
			{mounted && (
				<motion.div
					transition={{ delay: 1 }}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className={clsx(
						'mix-blend-color-dodge dark:mix-blend-overlay',
						'-translate-x-1/2 -translate-y-1/2',
						'pointer-events-none fixed z-50 h-10 w-10 rounded-full',
						'transition-opacity duration-300 ease-in-out',
						'dark:border-[1px] dark:border-opacity-0 dark:bg-opacity-100',
						hidden ? 'opacity-0' : 'opacity-100',
						linkHovered &&
							'dark:bg-light scale-150 transform bg-gray-900 transition-transform duration-300 ease-linear dark:border-white dark:border-opacity-100'
					)}
					style={{
						left: `${position.x}px`,
						top: `${position.y}px`,
					}}
				></motion.div>
			)}
		</AnimatePresence>
	)
}
