type NavLinkProps = {
	name: string
	href?: string
	id?: string
}

export const navLinks: NavLinkProps[] = [
	{
		name: 'Now',
		href: '/now',
	},
	{
		name: 'Work',
		href: '/work',
	},
	{
		name: 'Contact',
		href: '/contact',
	},
]

export default navLinks
