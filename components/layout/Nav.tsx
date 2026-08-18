import NavLink from './NavLink'
import navLinks from '@/lib/navLinks'

const Nav = () => {
	return (
		<nav className="hidden items-center gap-1 lg:flex">
			{navLinks.map(({ name, href, id }) => (
				<NavLink key={name} name={name} href={href} id={id} />
			))}
		</nav>
	)
}

export default Nav
