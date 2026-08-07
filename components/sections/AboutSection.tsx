import Image from 'next/image'
import { socialLinks } from '@/lib/socialLinks'
import Typography from '../ui/Typography'
import { Instagram } from '../icons'

const AboutSection = () => {
	return (
		<section
			id="about"
			className="flex flex-col gap-6 leading-relaxed text-gray-900 lg:items-start dark:text-white"
		>
			<div className="flex items-center gap-10">
				<div className="relative mb-4 h-32 w-32">
					<div className="blob absolute -top-4 -right-4 -bottom-4 -left-4 overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500"></div>
					<Image
						fill
						priority
						className="blob object-cover"
						src="/images/me.webp"
						alt="Personal Photo"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<Typography variant="h2">Sean O'Reilly</Typography>
					<Typography variant="p" className="text-gray-500">
						Frontend / Full-Stack Engineer
					</Typography>
					<div className="order-1 flex items-center gap-4 md:order-2">
						{socialLinks.map(({ name, href, Icon, className }) => (
							<a
								key={name}
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								className={`${className} transition-colors`}
								aria-label={name}
							>
								<Icon className="h-5 w-5" />
							</a>
						))}
					</div>
				</div>
			</div>
			<p>
				Hey there! I&apos;m Sean, a full-stack engineer who loves
				turning complex problems into simple, intuitive experiences. I
				build fast, accessible web applications with React, Next.js, and
				TypeScript, with a focus on thoughtful UX and clean engineering.
			</p>
			<p>
				I enjoy the intersection of design and technology: taking an
				idea, understanding the people using it, and building something
				that feels natural. Accessibility is a big part of that process,
				and I care about creating experiences that work well for
				everyone.
			</p>
			<p>
				I studied History and Sociology at the University of Kansas
				before becoming a developer through Le Wagon&apos;s Full Stack
				Coding Bootcamp. My background in teaching ESL and studying the
				humanities still influences how I approach engineering today:
				communicating clearly, understanding different perspectives, and
				breaking down complex problems.
			</p>
			<p>
				Outside of coding, I&apos;m usually scuba diving, hiking, and
				going on adventures. If you&apos;d like to collaborate, discuss
				an idea, or simply say hello, you can find me on{' '}
				<a
					className="underline-wavy inline-flex items-center gap-1"
					href="https://www.instagram.com/sea.oreilly/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Instagram <Instagram className="h-4 w-4" />
				</a>{' '}
				or send me an{' '}
				<a
					className="underline-wavy"
					href="mailto:soreilly424@gmail.com"
				>
					email
				</a>
				.
			</p>
		</section>
	)
}

export default AboutSection
