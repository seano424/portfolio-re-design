'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CursorProps {
	enabled?: boolean
}

export default function Cursor({ enabled = true }: CursorProps) {
	const [position, setPosition] = useState({ x: 0, y: 0 })
	const [hidden, setHidden] = useState(false)
	const [clicked, setClicked] = useState(false)
	const [linkHovered, setLinkHovered] = useState(false)
	const [mounted, setMounted] = useState(false)

	const mMove = useCallback((el: MouseEvent) => {
		requestAnimationFrame(() => {
			setPosition({ x: el.clientX, y: el.clientY })
		})
	}, [])

	const mDown = useCallback(() => setClicked(true), [])
	const mUp = useCallback(() => setClicked(false), [])
	const mEnter = useCallback(() => setHidden(false), [])
	const mLeave = useCallback(() => setHidden(true), [])

	const handleLinkHoverEvents = useCallback(() => {
		const elements = document.querySelectorAll(
			'a, #hamburger, #themeButton, button, .button, .primary-button'
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
	}, [])

	useEffect(() => {
		if (typeof window === 'undefined' || !enabled || isMobile()) return

		setMounted(true)
		document.addEventListener('mousemove', mMove)
		document.addEventListener('mouseenter', mEnter)
		document.addEventListener('mouseleave', mLeave)
		document.addEventListener('mousedown', mDown)
		document.addEventListener('mouseup', mUp)

		const cleanup = handleLinkHoverEvents()

		return () => {
			document.removeEventListener('mousemove', mMove)
			document.removeEventListener('mouseenter', mEnter)
			document.removeEventListener('mouseleave', mLeave)
			document.removeEventListener('mousedown', mDown)
			document.removeEventListener('mouseup', mUp)
			cleanup()
		}
	}, [enabled, mMove, mEnter, mLeave, mDown, mUp, handleLinkHoverEvents])

	const isMobile = (): boolean => {
		return (
			typeof navigator !== 'undefined' &&
			/Android|Mobi/i.test(navigator.userAgent)
		)
	}

	if (!enabled || isMobile()) return null

	return (
		<AnimatePresence>
			{mounted && (
				<motion.div
					transition={{ delay: 1 }}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className={`pointer-events-none fixed z-50 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-[1px] transition-opacity duration-300 ease-in-out ${hidden ? 'opacity-0' : 'opacity-100'} ${clicked ? 'scale-90' : 'scale-100'} ${linkHovered ? 'scale-150' : 'scale-100'} `}
					style={{
						left: `${position.x}px`,
						top: `${position.y}px`,
						borderColor: 'var(--cursor-border-color, #e11515)',
						backgroundColor:
							clicked || linkHovered
								? 'var(--cursor-active-color, #b32b2b)'
								: 'transparent',
						mixBlendMode:
							'var(--cursor-blend-mode, normal)' as React.CSSProperties['mixBlendMode'],
						transition: linkHovered
							? 'transform 300ms ease-linear'
							: 'transform 150ms ease-out',
					}}
				></motion.div>
			)}
		</AnimatePresence>
	)
}
