import NavLink from './NavLink'

export const navLinks = [
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

const Nav = () => {
	return (
		<nav className="hidden lg:flex w-full justify-between items-center">
			<div className="flex items-center gap-4">
				{navLinks.slice(0, 3).map(({ name, href, id }) => (
					<NavLink key={name} name={name} href={href} id={id} />
				))}
			</div>
			<div className="flex items-center gap-4">
				{navLinks.slice(3).map(({ name, href, id }) => (
					<NavLink key={name} name={name} href={href} id={id} />
				))}
			</div>
		</nav>
	)
}

export default Nav
