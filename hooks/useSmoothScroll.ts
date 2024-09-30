import { easeInOutQuad } from '@/lib/easing'

export const useSmoothScroll = () => {
	const smoothScroll = (targetPosition: number, duration: number) => {
		const startPosition = window.scrollY
		const distance = targetPosition - startPosition
		let startTime: number | null = null

		const animation = (currentTime: number) => {
			if (startTime === null) startTime = currentTime
			const timeElapsed = currentTime - startTime
			const run =
				easeInOutQuad(Math.min(timeElapsed / duration, 1)) * distance +
				startPosition
			window.scrollTo(0, run)
			if (timeElapsed < duration) requestAnimationFrame(animation)
		}

		requestAnimationFrame(animation)
	}

	return smoothScroll
}
