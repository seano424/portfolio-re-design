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
			'text-blue-500 hover:text-purple-500  md:hover:text-blue-500 dark:text-blue-300 dark:hover:text-white duration-200',
		href: 'https://twitter.com/sea_oreilly',
		Icon: Twitter,
	},
	{
		name: 'GitHub',
		className:
			'text-emerald-500 hover:text-fuchsia-700 dark:text-emerald-200 dark:hover:text-blue-300 duration-300',
		href: 'https://github.com/seano424',
		Icon: GitHub,
	},
	{
		name: 'LinkedIn',
		className:
			'text-black hover:text-blue-500 dark:text-blue-200 dark:hover:text-white duration-700',
		href: 'https://www.linkedin.com/in/sea-oreilly/',
		Icon: LinkedIn,
	},
]

export default socialLinks
