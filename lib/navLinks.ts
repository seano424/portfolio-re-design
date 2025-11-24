type NavLinkProps = {
	name: string
	href?: string
	id?: string
}

export const navLinks: NavLinkProps[] = [
	{
		name: 'Media',
		id: 'media',
	},
	{
		name: 'Blog',
		id: 'blog',
	},
	{
		name: 'Work',
		href: '/work',
	},
	{
		name: 'About Me',
		id: 'about',
	},
	{
		name: 'Contact',
		href: '/contact',
	},
]

export default navLinks
