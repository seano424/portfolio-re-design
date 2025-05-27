'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { MoveRight } from 'lucide-react'
import SocialLinks from '@/components/common/SocialLinks'
import ColorChangingText from '@/components/ui/ColorChangingText'
import StarCanvas from '../ui/StarCanvas'

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
			className="relative flex min-h-screen items-center justify-center pb-20"
		>
			<StarCanvas visible={true} />
			<div className="container grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-0">
				<div className="flex flex-col gap-6">
					<h1
						className={`flex flex-col text-6xl font-black md:text-gray-900 dark:text-white`}
					>
						<span className="block">Hi, I&apos;m Sean 👋</span>
					</h1>
					<h1
						className={`flex flex-col text-6xl font-black md:text-gray-900 dark:text-white`}
					>
						<span className="block">
							Building{' '}
							<ColorChangingText text="beautiful websites" /> with
							JavaScript, React, and Next.js!
						</span>
					</h1>

					<p className="flex flex-wrap items-center gap-1 text-xl text-gray-400 dark:text-white">
						Come and see what I&apos;m currently{' '}
						<a
							href="#showcase"
							className="cursor-hover group flex items-center gap-1 underline underline-offset-8"
						>
							working on
							<MoveRight className="h-5 w-5 text-purple-500 transition-all duration-500 ease-in-out group-hover:translate-x-1 group-hover:scale-125 dark:text-blue-500 dark:hover:text-blue-100" />
						</a>
					</p>
					<SocialLinks />
				</div>

				<div className="my-10 hidden items-center justify-center lg:my-0 lg:flex">
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
