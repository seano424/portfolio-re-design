type NavLinkProps = {
	name: string
	href?: string
	id?: string
}

export const navLinks: NavLinkProps[] = [
	{
		name: 'Showcase',
		id: 'showcase',
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
