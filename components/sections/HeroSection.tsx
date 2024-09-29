import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const HeroSection = () => {
	return (
		<div className="flex max-w-4xl flex-col gap-6 py-10">
			<p className="font-mono text-sm uppercase tracking-widest text-gray-700">
				Sean O&apos;Reilly
			</p>
			<h1
				className={`${inter.className} flex flex-col text-4xl font-black md:text-6xl`}
			>
				<span className="block text-blue-500">Hi! 👋</span>
				<span className="block">My name is Sean.</span>
				<span className="block">
					I build websites with modern tools & technologies!
				</span>
			</h1>
			<p className="text-lg text-gray-400">
				Come and see what I&apos;m currently{' '}
				<a href="#" className="underline">
					working on
				</a>{' '}
				—
			</p>
		</div>
	)
}

export default HeroSection

// Hi! 👋 My name is Sean. I build websites with modern tools & technologies!
