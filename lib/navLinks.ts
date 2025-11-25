type NavLinkProps = {
	name: string
	href?: string
	id?: string
}

export const navLinks: NavLinkProps[] = [
	{
		name: 'Projects',
		id: 'showcase',
	},
	{
		name: 'Toolkit',
		id: 'toolkit',
	},
	{
		name: 'Work',
		href: '/work',
	},
	{
		name: 'About',
		href: '/about-me',
	},
	{
		name: 'Contact',
		href: '/contact',
	},
]

export default navLinks
