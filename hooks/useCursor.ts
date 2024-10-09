import { useState, useEffect } from 'react'

export default function useCursor() {
	const [position, setPosition] = useState({ x: 0, y: 0 })
	const [hidden, setHidden] = useState(false)
	const [linkHovered, setLinkHovered] = useState(false)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		if (typeof window === 'undefined') return

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
	}, [])

	return {
		position,
		hidden,
		linkHovered,
		mounted,
	}
}
