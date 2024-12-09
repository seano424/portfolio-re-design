import Nav from './Nav'
import Link from 'next/link'
import ThemeSwitch from '@/components/theme/ThemeSwitch'
import MobileMenuButton from '../mobile/MobileMenuButton'
import NavLink from './NavLink'
import Logo from '@/components/ui/Logo'

const Header = () => {
	return (
		<header className="fixed top-0 right-0 left-0 z-50 h-20 bg-gray-50/30 py-4 text-gray-900 filter backdrop-blur-sm dark:bg-gray-900/30 dark:text-white">
			<div className="container flex h-full items-center justify-between">
				<NavLink isLogo id="hero" name="logo" reactElement={<Logo />} />
				<Nav />
				<div className="flex items-center gap-4">
					<Link
						href="/hire-me"
						className="bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-md bg-linear-to-r from-blue-500 via-purple-500 to-purple-500 px-4 py-2 font-mono font-bold text-white uppercase transition-all duration-500 ease-linear"
					>
						Resume
					</Link>
					<ThemeSwitch />
					<MobileMenuButton />
				</div>
			</div>
		</header>
	)
}

export default Header
