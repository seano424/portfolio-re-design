import { useState, useEffect } from 'react'

const colorPairs = [
	['#4d2dff', '#0051ff'],
	['#ff9a8b', '#ff6a88'],
	['#e81cff', '#7d5fff'],
	// ['#40c9ff', '#90e0ef'],
]

export default function useColorChange() {
	const [currentPairIndex, setCurrentPairIndex] = useState(0)

	useEffect(() => {
		const timerId = setInterval(() => {
			setCurrentPairIndex(
				(prevIndex) => (prevIndex + 1) % colorPairs.length
			)
		}, 3000)

		return () => clearInterval(timerId)
	}, [])

	const [startColor, endColor] = colorPairs[currentPairIndex]
	return { startColor, endColor }
}
