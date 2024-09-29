import { Twitter, GitHub, LinkedIn } from '@/components/icons'
import { ComponentProps } from 'react'

type SocialLinkProps = {
	name: string
	href: string
	Icon: (props: ComponentProps<'svg'>) => JSX.Element
	className: string
}

export const socialLinks: SocialLinkProps[] = [
	{
		name: 'Twitter',
		className:
			'text-blue-500 hover:text-primary-500 dark:text-primary-500 dark:hover:text-white',
		href: 'https://twitter.com/sea_oreilly',
		Icon: Twitter,
	},
	{
		name: 'GitHub',
		className:
			'text-[#06d6a0] hover:text-secondary-100 dark:text-emerald-200 dark:hover:text-primary-300',
		href: 'https://github.com/seano424',
		Icon: GitHub,
	},
	{
		name: 'LinkedIn',
		className:
			'text-secondary-100 hover:text-primary-500 dark:text-blue-200 dark:hover:text-white',
		href: 'https://www.linkedin.com/in/sea-oreilly/',
		Icon: LinkedIn,
	},
]

export default socialLinks
