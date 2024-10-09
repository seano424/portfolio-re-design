'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import useColorChange from '@/hooks/useColorChange'
interface Props {
	text: string
	className?: string
}

const ColorChangingText = ({ text, className }: Props) => {
	const { startColor, endColor } = useColorChange()

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
				duration: 3,
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

export default ColorChangingText
