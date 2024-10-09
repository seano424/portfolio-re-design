'use client'

import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import useCursor from '@/hooks/useCursor'

export default function Cursor() {
	const { position, hidden, linkHovered, mounted } = useCursor()

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
