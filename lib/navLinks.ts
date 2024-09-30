type NavLinkProps = {
	name: string
	href?: string
	id?: string
}

export const navLinks: NavLinkProps[] = [
	{
		name: 'Showcase',
		href: '/showcase',
	},
	{
		name: 'About',
		id: 'about',
	},
	{
		name: 'Blog',
		href: '/blog',
	},
	{
		name: 'Media',
		href: '/media',
	},
	{
		name: 'Contact',
		href: '/contact',
	},
]

export default navLinks
