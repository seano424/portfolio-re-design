'use client'

import { MoveRight } from 'lucide-react'

interface ScrollToButtonProps {
	targetId: string
	children: React.ReactNode
}

const ScrollToButton = ({ targetId, children }: ScrollToButtonProps) => {
	return (
		<button
			onClick={(e) => {
				e.preventDefault()
				document.getElementById(targetId)?.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				})
			}}
			className="group flex cursor-pointer items-center gap-2"
		>
			{children}
			<MoveRight className="lucide lucide-move-right h-5 w-5 text-purple-500 transition-all duration-500 ease-in-out group-hover:translate-x-1 group-hover:scale-125 dark:text-blue-500 dark:hover:text-blue-100" />
		</button>
	)
}

export default ScrollToButton
