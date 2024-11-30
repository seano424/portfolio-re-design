import clsx from 'clsx'
import Image from 'next/image'
import Subheading from '@/components/ui/Subheading'
import SocialLinks from '@/components/common/SocialLinks'
import ColorChangingText from '@/components/ui/ColorChangingText'

const HeroSection = () => {
	return (
		<section className="relative mb-40 pt-20 lg:pt-40">
			<div className="container">
				<div className="flex flex-col gap-6 lg:max-w-3xl 2xl:max-w-4xl">
					<Subheading text="Sean O'Reilly" />
					<h1
						className={`flex flex-col text-5xl font-black text-white md:text-6xl md:text-gray-900 dark:text-white`}
					>
						<span className="block">Front-end developer.</span>

						<span className="block">
							Building{' '}
							<ColorChangingText text="beautiful websites" /> with
							modern tools & technologies!
						</span>
					</h1>

					<p className="text-xl text-white md:text-gray-400 dark:text-white">
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
