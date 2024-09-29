import clsx from 'clsx'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import SocialLinks from '../common/SocialLinks'
import ColorChangingText from '@/components/ui/ColorChangingText'

const inter = Inter({ subsets: ['latin'] })

const HeroSection = () => {
	return (
		<div className="relative py-24 pb-32 lg:pt-40">
			<div className="container">
				<div className="flex flex-col gap-6 lg:max-w-3xl 2xl:max-w-4xl">
					<p className="font-mono text-sm uppercase tracking-widest text-blue-300 dark:text-gray-700">
						Sean O&apos;Reilly
					</p>
					<h1
						className={`${inter.className} flex flex-col text-4xl font-black text-white md:text-6xl md:text-gray-900`}
					>
						<span className="block md:text-blue-500">Hi! 👋</span>
						<span className="block">My name is Sean.</span>
						<span className="block">
							I build <ColorChangingText text="websites" /> with
							modern tools & technologies!
						</span>
					</h1>

					<p className="text-lg text-white md:text-gray-400">
						Come and see what I&apos;m currently{' '}
						<a href="#" className="underline">
							working on
						</a>{' '}
						—
					</p>
					<SocialLinks />
				</div>
			</div>

			<div
				className={clsx(
					`absolute inset-0 -z-10 overflow-hidden md:-right-[170%] lg:-right-[160%] 2xl:-right-[120%]`
				)}
			>
				<Image
					fill
					src="/images/bg-water.png"
					className="transform object-cover contrast-50 hue-rotate-60 saturate-150 filter md:rotate-[40deg] md:contrast-100 md:grayscale-0 md:hue-rotate-15 xl:rotate-[25deg]"
					alt="Decorative background image of water"
					sizes="100vw"
					priority
					quality={50}
				/>
				<div className="absolute inset-0 bg-black opacity-20 md:opacity-0" />
			</div>
		</div>
	)
}

export default HeroSection

// Hi! 👋 My name is Sean. I build websites with modern tools & technologies!
