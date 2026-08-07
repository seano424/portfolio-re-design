import Nav from './Nav'
import Link from 'next/link'
import ThemeSwitch from '@/components/theme/ThemeSwitch'
import MobileMenuButton from '../mobile/MobileMenuButton'
import Typography from '../ui/Typography'

const Header = () => {
	return (
		<header className="fixed top-0 right-0 left-0 z-50 h-20 bg-white/90 py-4 text-gray-900 filter backdrop-blur-sm dark:bg-gray-900/10 dark:text-white container">
			<div className="flex h-full items-center justify-between">
				<Link href="/">
					<Typography
						variant="h3"
						className="uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-purple-500 dark:from-amber-500 dark:via-green-300 dark:to-green-300"
					>
						Sean O'Reilly
					</Typography>
				</Link>
				<div className="flex items-center">
					<Nav />
				</div>
				<div className="flex items-center gap-4">
					<a
						href="/Sean_OReilly_Resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-size-200 bg-pos-0 hover:bg-pos-100 hidden rounded-md bg-linear-to-r from-blue-500 via-purple-500 to-purple-500 px-4 py-2 font-mono font-bold text-white uppercase transition-all duration-500 ease-linear lg:block"
					>
						Resume
					</a>
					<ThemeSwitch />
					<MobileMenuButton />
				</div>
			</div>
		</header>
	)
}

export default Header
