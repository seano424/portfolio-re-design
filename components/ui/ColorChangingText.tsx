'use client'

import clsx from 'clsx'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

type GradientTextProps = {
	text: string
	interval?: number
	className?: string
}

const GradientText = ({
	text,
	interval = 3000,
	className,
}: GradientTextProps) => {
	const colorPairs = [
		['#a3a1ff', '#3a86ff'],
		['#ff9a8b', '#ff6a88'],
		['#8ed1fc', '#7d5fff'],
		['#40c9ff', '#90e0ef'],
		['#e81cff', '#12fdc3cf'],
		['#03045e', '#4ecdc4'],
	]

	const [currentPairIndex, setCurrentPairIndex] = useState(0)

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentPairIndex(
				(prevIndex) => (prevIndex + 1) % colorPairs.length
			)
		}, interval)

		return () => clearInterval(timer)
	}, [interval])

	const [startColor, endColor] = colorPairs[currentPairIndex]

	return (
		<motion.span
			initial={{
				backgroundImage: `linear-gradient(to right, ${startColor}, ${endColor})`,
			}}
			animate={{
				backgroundPosition: '200% 0%',
				backgroundImage: `linear-gradient(to right, ${startColor}, ${endColor})`,
			}}
			transition={{
				duration: interval / 1000,
				repeat: Infinity,
				repeatType: 'loop',
			}}
			className={clsx(
				'animate-gradient bg-clip-text text-transparent',
				className
			)}
		>
			{text}
		</motion.span>
	)
}

export default GradientText
