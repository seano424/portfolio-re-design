import Link from 'next/link'
import navLinks from '@/lib/navLinks'

const NavLink = ({ name, href }: { name: string; href: string }) => {
	return (
		<li>
			<Link href={href} className="hover:text-blue-400">
				{name}
			</Link>
		</li>
	)
}

const Header = () => {
	return (
		<header className="p-4 font-mono text-white">
			<div className="container flex items-center justify-between space-x-6">
				<Link href="/" className="text-2xl font-bold">
					SEANOREILLY
				</Link>
				<nav className="hidden w-full flex-1 lg:flex lg:w-auto lg:items-center lg:justify-between lg:gap-6">
					<ul className="flex space-x-6">
						{navLinks.slice(0, 3).map(({ name, href }) => (
							<li key={name}>
								<NavLink name={name} href={href} />
							</li>
						))}
					</ul>
					<ul className="flex space-x-6">
						{navLinks.slice(3).map(({ name, href }) => (
							<li key={name}>
								<NavLink name={name} href={href} />
							</li>
						))}
					</ul>
				</nav>
				<Link
					href="/hire-me"
					className="bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-purple-500 px-4 py-2 font-bold text-white transition-all duration-500 ease-linear"
				>
					HIRE ME
				</Link>
			</div>
		</header>
	)
}

export default Header
