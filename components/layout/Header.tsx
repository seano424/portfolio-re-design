import Link from 'next/link'
import navLinks from '@/lib/navLinks'

const NavLink = ({ name, href }: { name: string; href: string }) => {
	return (
		<li>
			<Link href={href}>{name}</Link>
		</li>
	)
}

const Header = () => {
	return (
		<header className="p-4 font-mono text-gray-900 dark:text-white">
			<div className="container flex items-center justify-between space-x-6">
				<Link href="/" className="text-2xl font-bold">
					SEANOREILLY
				</Link>
				<nav className="hidden w-full flex-1 lg:flex lg:w-auto lg:items-center lg:justify-between lg:gap-6">
					<ul className="flex space-x-6">
						{navLinks.slice(0, 3).map(({ name, href }) => (
							<NavLink key={name} name={name} href={href} />
						))}
					</ul>
					<ul className="flex space-x-6">
						{navLinks.slice(3).map(({ name, href }) => (
							<NavLink key={name} name={name} href={href} />
						))}
					</ul>
				</nav>
				<Link
					href="/hire-me"
					className="rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-purple-500 bg-size-200 bg-pos-0 px-4 py-2 font-bold text-white transition-all duration-500 ease-linear hover:bg-pos-100"
				>
					HIRE ME
				</Link>
			</div>
		</header>
	)
}

export default Header
