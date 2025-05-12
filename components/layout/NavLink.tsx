'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import { useSmoothScroll } from '@/hooks/useSmoothScroll'

interface NavLinkProps {
	name: string
	href?: string
	id?: string
	reactElement?: React.ReactNode
	isLogo?: boolean
	onClick?: () => void
}

const NavLink: React.FC<NavLinkProps> = ({
	name,
	href,
	id,
	reactElement,
	isLogo = false,
	onClick,
}) => {
	const pathname = usePathname()
	const smoothScroll = useSmoothScroll()
	const router = useRouter()

	const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		if (id) {
			if (pathname !== '/') {
				router.push('/')

				// Wait for element to exist
				await new Promise((resolve) => {
					const checkElement = setInterval(() => {
						const element = document.getElementById(id)
						if (element) {
							clearInterval(checkElement)
							resolve(true)
						}
					}, 100)
				})
			}
			const targetElement = document.getElementById(id)
			if (targetElement) {
				const offset = 100
				const targetPosition =
					targetElement.getBoundingClientRect().top +
					window.scrollY -
					offset
				smoothScroll(targetPosition, 1000) // 1000ms = 1 second duration
				window.history.pushState(null, '', `#${id}`)
			}
		}
		onClick?.()
	}

	if (href) {
		return (
			<Link
				className={clsx(
					!isLogo &&
						'dark:text-light transform rounded-full px-5 py-4 text-3xl font-black tracking-tighter transition-all duration-700 ease-linear hover:bg-gray-200/60 dark:hover:scale-110 dark:hover:bg-gray-900/50 dark:hover:text-gray-100'
				)}
				href={href}
				onClick={onClick}
			>
				{reactElement ? reactElement : name}
			</Link>
		)
	}

	return (
		<a
			href={`/#${id}`}
			onClick={handleClick}
			className={clsx(
				!isLogo &&
					'dark:text-light transform rounded-full px-5 py-4 text-3xl font-black tracking-tighter transition-all duration-700 ease-linear hover:bg-gray-200/60 dark:hover:scale-110 dark:hover:bg-gray-900/50 dark:hover:text-gray-100'
			)}
		>
			{reactElement ? reactElement : name}
		</a>
	)
}

export default NavLink
