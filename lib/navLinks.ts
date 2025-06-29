type NavLinkProps = {
	name: string
	href?: string
	id?: string
}

export const navLinks: NavLinkProps[] = [
	// {
	// 	name: 'Experience',
	// 	id: 'experience',
	// },
	{
		name: 'Projects',
		id: 'showcase',
	},
	{
		name: 'Toolkit',
		id: 'toolkit',
	},
	{
		name: 'About',
		id: 'about',
	},
	{
		name: 'Contact',
		href: '/contact',
	},
]

export default navLinks
