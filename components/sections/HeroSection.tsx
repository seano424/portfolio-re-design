import clsx from 'clsx'
import Image from 'next/image'
import Subheading from '@/components/ui/Subheading'
import SocialLinks from '@/components/common/SocialLinks'
import ColorChangingText from '@/components/ui/ColorChangingText'
import { MoveRight } from 'lucide-react'

const HeroSection = () => {
	return (
		<section id="home" className="relative mb-40 pt-20 lg:pt-40">
			<div className="container">
				<div className="flex flex-col gap-6 lg:max-w-3xl 2xl:max-w-4xl">
					<Subheading text="Sean O'Reilly" />
					<h1
						className={`flex flex-col text-5xl font-black md:text-6xl md:text-gray-900 dark:text-white`}
					>
						<span className="block">Front-end developer.</span>

						<span className="block">
							Building{' '}
							<ColorChangingText text="beautiful websites" /> with
							modern tools & technologies!
						</span>
					</h1>

					<p className="flex items-center gap-1 text-xl text-gray-400 dark:text-white">
						Come and see what I&apos;m currently{' '}
						<a
							href="#showcase"
							className="cursor-hover group flex items-center gap-1 underline underline-offset-8"
						>
							working on
							<MoveRight className="h-5 w-5 text-purple-500 transition-all duration-500 ease-in-out group-hover:translate-x-1 group-hover:scale-125 dark:hover:text-blue-100 dark:text-blue-500" />
						</a>
					</p>
					<SocialLinks />
				</div>
			</div>

			<div
				className={clsx(
					`absolute inset-0 -z-10 hidden overflow-hidden md:block`
					// 'md:-right-[170%] lg:-right-[160%] 2xl:-right-[110%]'
				)}
			>
				<Image
					fill
					src="/images/bg-water.png"
					className={clsx(
						'transform object-cover filter',
						'origin-bottom-right',
						'md:rotate-[50deg] lg:rotate-[40deg] 2xl:rotate-[30deg]',
						'contrast-50 hue-rotate-60 saturate-150 md:contrast-100 md:grayscale-0 md:hue-rotate-15'
					)}
					alt="Decorative background image of water"
					sizes="100vw"
					priority
					quality={50}
				/>
				<div className="absolute inset-0 bg-black opacity-20 md:opacity-0" />
			</div>
		</section>
	)
}

export default HeroSection
