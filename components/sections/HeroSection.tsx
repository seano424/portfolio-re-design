'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { MoveRight } from 'lucide-react'
import SocialLinks from '@/components/common/SocialLinks'
import ColorChangingText from '@/components/ui/ColorChangingText'
import StarCanvas from '@/components/ui/StarCanvas'
import Typography from '@/components/ui/Typography'

const HeroSection = () => {
	useEffect(() => {
		console.log(
			"%c👋 Hey there! I'm Sean, a front-end developer who loves to build beautiful websites and apps ☃️",
			'color: #4F46E5; font-size: 16px; font-weight: bold;'
		)
		console.log(
			'%cFeel free to check out the code on GitHub: %chttps://github.com/seano424 🐸',
			'color: #1106e7; font-size: 14px;',
			'color: #10B981; font-size: 14px; font-weight: bold;'
		)
	}, [])

	return (
		<section
			id="home"
			className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center bg-white/60 pb-36 lg:pb-0 dark:bg-gray-900/0"
		>
			<div className="absolute inset-0 -z-10 h-full w-full">
				<Image
					src="/images/bg-water.png"
					alt="Hero Background"
					fill
					className="object-cover"
				/>
			</div>

			<StarCanvas visible={true} />
			<div className="container flex flex-col gap-10 lg:flex-row lg:gap-0">
				<div className="flex flex-col gap-6 text-left md:text-center lg:text-left">
					<div className="flex flex-col gap-0">
						<Typography
							variant="small"
							className="font-mono text-sm tracking-widest text-blue-50 uppercase"
						>
							Sean O'Reilly
						</Typography>
						<Typography
							variant="small"
							className="font-mono text-sm tracking-widest text-blue-50 uppercase dark:text-blue-50/50"
						>
							Frontend Dev
						</Typography>
					</div>
					<Typography variant="h1" className="capitalize">
						Turning ideas into{' '}
						<ColorChangingText text="beautiful, high" />{' '}
						<ColorChangingText text="performance" /> web
						applications
					</Typography>

					<Typography
						variant="p"
						className="flex flex-wrap items-center gap-1 text-xl text-gray-900 md:justify-center lg:justify-start dark:text-white"
					>
						<button
							onClick={(e) => {
								e.preventDefault()
								document
									.getElementById('showcase')
									?.scrollIntoView({
										behavior: 'smooth',
										block: 'start',
									})
							}}
							className="group flex cursor-pointer items-center gap-2"
						>
							Explore my{' '}
							<span className="underline underline-offset-8">
								latest projects
							</span>
							<MoveRight className="lucide lucide-move-right h-5 w-5 text-purple-500 transition-all duration-500 ease-in-out group-hover:translate-x-1 group-hover:scale-125 dark:text-blue-500 dark:hover:text-blue-100" />
						</button>
					</Typography>

					<SocialLinks />
				</div>

				<div className="container my-10 hidden items-center justify-end lg:my-0 lg:flex">
					<div className="relative h-[400px] w-[400px]">
						<div className="blob absolute -top-10 -right-10 -bottom-10 -left-10 overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500"></div>
						<Image
							fill
							className="blob object-cover"
							src="/images/me.png"
							alt="Personal Photo"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
