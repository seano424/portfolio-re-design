import navLinks from '@/lib/navLinks'
import NavLink from './NavLink'

const Nav = () => {
	return (
		<nav className="hidden lg:flex lg:w-auto lg:items-center lg:justify-between lg:gap-6">
			<ul className="flex space-x-6">
				{navLinks.map(({ name, href, id }) => (
					<NavLink key={name} name={name} href={href} id={id} />
				))}
			</ul>
		</nav>
	)
}

export default Nav
