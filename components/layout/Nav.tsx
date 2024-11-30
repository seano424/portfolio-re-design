import navLinks from '@/lib/navLinks'
import NavLink from './NavLink'

const Nav = () => {
	return (
		<nav className="hidden lg:w-auto lg:items-center lg:justify-between lg:gap-6 xl:flex">
			<ul className="flex space-x-4">
				{navLinks.map(({ name, href, id }) => (
					<NavLink key={name} name={name} href={href} id={id} />
				))}
			</ul>
		</nav>
	)
}

export default Nav
