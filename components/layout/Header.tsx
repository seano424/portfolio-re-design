import Nav from './Nav'
import Link from 'next/link'
import Image from 'next/image'
import ThemeSwitch from '@/components/theme/ThemeSwitch'
import MobileMenuButton from '../mobile/MobileMenuButton'

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
				<Nav />
				<div className="flex items-center gap-4">
					<Link
						href="/hire-me"
						className="rounded-md bg-linear-to-r from-blue-500 via-purple-500 to-purple-500 bg-size-200 bg-pos-0 px-4 py-2 font-mono font-bold uppercase text-white transition-all duration-500 ease-linear hover:bg-pos-100"
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
