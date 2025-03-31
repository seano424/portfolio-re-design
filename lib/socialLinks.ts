import { LinkedIn, Bluesky } from '@/components/icons'
import { ComponentProps } from 'react'
import { LucideIcon } from 'lucide-react'

type SocialLinkProps = {
	name: string
	href: string
	Icon: LucideIcon | ((props: ComponentProps<'svg'>) => JSX.Element)
	className: string
}

export const socialLinks: SocialLinkProps[] = [
	// {
	// 	name: 'Twitter',
	// 	className:
	// 		'text-blue-500 hover:text-purple-500  md:hover:text-blue-500 dark:text-blue-300 dark:hover:text-white duration-200',
	// 	href: 'https://twitter.com/sea_oreilly',
	// 	Icon: Twitter,
	// },
	// {
	// 	name: 'By Phone',
	// 	className:
	// 		'text-black hover:text-blue-500 dark:text-blue-200 dark:hover:text-white duration-700',
	// 	href: 'tel:+19139610388',
	// 	Icon: Phone,
	// },
	{
		name: 'LinkedIn',
		className:
			'text-black hover:text-blue-500 dark:text-blue-200 dark:hover:text-white duration-700',
		href: 'https://www.linkedin.com/in/sea-oreilly/',
		Icon: LinkedIn,
	},
	{
		name: 'Bluesky',
		className:
			'text-black hover:text-blue-500 dark:text-blue-200 dark:hover:text-white duration-700',
		href: 'https://bsky.app/profile/sea-oreilly.bsky.social',
		Icon: Bluesky,
	},
]

export default socialLinks
