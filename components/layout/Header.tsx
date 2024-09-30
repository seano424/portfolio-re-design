import Link from 'next/link'
import navLinks from '@/lib/navLinks'
import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

const NavLink = ({
	name,
	href,
	id,
}: {
	name: string
	href?: string
	id?: string
}) => {
	return (
		<>
			{href ? (
				<Link
					className={`${inter.className} dark:text-light transform rounded-full px-5 py-4 text-3xl font-black tracking-tighter transition-all duration-700 ease-linear hover:bg-gray-200/60 dark:hover:scale-110 dark:hover:bg-gray-900/50 dark:hover:text-gray-100`}
					href={href}
				>
					{name}
				</Link>
			) : (
				<a
					href={`#${id}`}
					className={`${inter.className} dark:text-light transform rounded-full px-5 py-4 text-3xl font-black tracking-tighter transition-all duration-700 ease-linear hover:bg-gray-200/60 dark:hover:scale-110 dark:hover:bg-gray-900/50 dark:hover:text-gray-100`}
				>
					{name}
				</a>
			)}
		</>
	)
}

const Header = () => {
	return (
		<header className="fixed left-0 right-0 top-0 z-50 h-20 bg-gray-50 bg-opacity-80 py-4 text-gray-900 filter backdrop-blur-lg dark:bg-gray-900 dark:text-white">
			<div className="container flex h-full items-center justify-between">
				<Link href="/" className="relative h-10 w-40">
					<Image
						fill
						sizes="160px"
						className="object-cover object-center dark:hidden"
						src="/logos/light-2.png"
						alt="Sean O'Reilly"
						priority
					/>
					<Image
						fill
						sizes="160px"
						className="hidden object-cover object-center dark:block"
						src="/logos/dark-2.png"
						alt="Sean O'Reilly"
						priority
					/>
				</Link>
				<nav className="hidden lg:flex lg:w-auto lg:items-center lg:justify-between lg:gap-6">
					<ul className="flex space-x-6">
						{navLinks.map(({ name, href, id }) => (
							<NavLink
								key={name}
								name={name}
								href={href}
								id={id}
							/>
						))}
					</ul>
				</nav>
				<Link
					href="/hire-me"
					className="rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-purple-500 bg-size-200 bg-pos-0 px-4 py-2 font-mono font-bold text-white transition-all duration-500 ease-linear hover:bg-pos-100"
				>
					HIRE ME
				</Link>
			</div>
		</header>
	)
}

export default Header
