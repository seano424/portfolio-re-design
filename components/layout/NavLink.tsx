'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import { useSmoothScroll } from '@/hooks/useSmoothScroll'


const commonClasses = `dark:text-light transform rounded-full px-5 py-4 text-3xl font-black tracking-tighter transition-all duration-700 ease-linear hover:bg-gray-200/60 dark:hover:scale-110 dark:hover:bg-gray-900/50 dark:hover:text-gray-100`

interface NavLinkProps {
	name: string
	href?: string
	id?: string
}

const NavLink: React.FC<NavLinkProps> = ({ name, href, id }) => {
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
	}

	if (href) {
		return (
			<Link className={commonClasses} href={href}>
				{name}
			</Link>
		)
	}

	return (
		<a href={`/#${id}`} onClick={handleClick} className={commonClasses}>
			{name}
		</a>
	)
}

export default NavLink
