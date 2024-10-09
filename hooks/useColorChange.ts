import { useState, useEffect } from 'react'

const colorPairs = [
	['#a3a1ff', '#3a86ff'],
	['#ff9a8b', '#ff6a88'],
	['#8ed1fc', '#7d5fff'],
	['#40c9ff', '#90e0ef'],
	['#e81cff', '#12fdc3cf'],
	['#03045e', '#4ecdc4'],
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
