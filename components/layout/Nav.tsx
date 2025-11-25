import NavLink from './NavLink'
import navLinks from '@/lib/navLinks'

const Nav = () => {
	return (
		<nav className="hidden w-full items-center justify-between lg:flex">
			<div className="flex items-center gap-1">
				{navLinks.slice(0, 3).map(({ name, href, id }) => (
					<NavLink key={name} name={name} href={href} id={id} />
				))}
			</div>
			<div className="flex items-center gap-1">
				{navLinks.slice(3).map(({ name, href, id }) => (
					<NavLink key={name} name={name} href={href} id={id} />
				))}
			</div>
		</nav>
	)
}

export default Nav
