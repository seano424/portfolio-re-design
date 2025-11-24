import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function useCursor() {
	const [position, setPosition] = useState({ x: 0, y: 0 })
	const [hidden, setHidden] = useState(false)
	const [linkHovered, setLinkHovered] = useState(false)
	const pathname = usePathname()

	useEffect(() => {
		if (typeof window === 'undefined') return

		const isMobile = /Android|Mobi/i.test(navigator.userAgent)
		if (isMobile) return

		// Debounced RAF for better performance
		let frame: number
		const mMove = (el: MouseEvent) => {
			if (frame) {
				cancelAnimationFrame(frame)
			}
			frame = requestAnimationFrame(() => {
				setPosition({ x: el.clientX, y: el.clientY })
			})
		}

		const mEnter = () => setHidden(false)
		const mLeave = () => setHidden(true)

		// Separated hover handler functions
		const mOver = () => setLinkHovered(true)
		const mOut = () => setLinkHovered(false)

		const attachHoverListeners = () => {
			const elements = document.querySelectorAll(
				'a, button, .cursor-hover'
			)

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

		// Attach base mouse movement listeners
		document.addEventListener('mousemove', mMove)
		document.addEventListener('mouseenter', mEnter)
		document.addEventListener('mouseleave', mLeave)

		// Initial attachment of hover listeners
		let cleanupHoverListeners = attachHoverListeners()

		// Create a MutationObserver to watch for DOM changes with throttling
		let mutationTimeout: NodeJS.Timeout
		const observer = new MutationObserver(() => {
			// Throttle the reattachment to prevent performance issues
			clearTimeout(mutationTimeout)
			mutationTimeout = setTimeout(() => {
				cleanupHoverListeners()
				cleanupHoverListeners = attachHoverListeners()
			}, 100)
		})

		// Start observing the document with the configured parameters
		observer.observe(document.body, {
			childList: true,
			subtree: true,
		})

		return () => {
			if (frame) {
				cancelAnimationFrame(frame)
			}
			clearTimeout(mutationTimeout)
			document.removeEventListener('mousemove', mMove)
			document.removeEventListener('mouseenter', mEnter)
			document.removeEventListener('mouseleave', mLeave)
			cleanupHoverListeners()
			observer.disconnect()
		}
	}, [pathname]) // Re-run effect when pathname changes

	return {
		position,
		hidden,
		linkHovered,
	}
}
