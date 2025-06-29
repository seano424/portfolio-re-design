'use client'

import { Mail, GitHub, LinkedIn } from './icons'

const Resume = () => {
	const handleDownload = () => {
		window.open('/sean-oreilly-resume.pdf', '_blank')
	}

	return (
		<div className="container mx-auto flex max-w-4xl flex-col items-center justify-center p-8 dark:bg-gray-900 dark:text-white">
			<button
				className="cursor-hover bg-size-200 bg-pos-0 hover:bg-pos-100 mb-5 rounded-md bg-linear-to-br from-purple-500 to-blue-500 px-4 py-2 font-mono font-bold text-white uppercase transition-all duration-500 ease-linear"
				onClick={() => handleDownload()}
			>
				Download
			</button>
			<div className="flex flex-col gap-2">
				{/* Header */}
				<header className="flex flex-col gap-2 text-center">
					<h1 className="text-5xl font-black text-gray-900 md:text-6xl dark:text-white">
						SEAN O&apos;REILLY
					</h1>
					<h2 className="text-xl font-black text-blue-500 dark:text-purple-500">
						FRONTEND DEVELOPER
					</h2>
					<a
						href="https://sean-oreilly-portfolio.vercel.app/"
						className="cursor-hover flex items-center justify-center gap-1 text-gray-600 uppercase dark:text-gray-400"
					>
						sean-oreilly-portfolio.vercel.app
					</a>
				</header>

				{/* Contact Info */}
				<div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-6">
					<a
						href="mailto:soreilly424@gmail.com"
						className="cursor-hover flex items-center justify-center gap-1 text-gray-600 uppercase dark:text-gray-400"
					>
						<Mail />
						soreilly424@gmail.com
					</a>
					<a
						href="https://github.com/seano424"
						className="cursor-hover flex items-center justify-center gap-1 text-gray-600 uppercase dark:text-gray-400"
					>
						<GitHub />
						@seano424
					</a>
					<a
						href="https://linkedin.com/in/sea-oreilly"
						className="cursor-hover flex items-center justify-center gap-1 text-gray-600 uppercase dark:text-gray-400"
					>
						<LinkedIn />
						@sea-oreilly
					</a>
				</div>

				{/* Summary */}
				<section className="mb-8">
					<p className="leading-relaxed text-gray-700 dark:text-gray-300">
						A passionate and pragmatic Frontend Developer with over
						3 years of experience crafting blazing-fast, accessible
						web applications. Specialized in React and Next.js
						development with a strong foundation in TypeScript and
						modern JavaScript. Experienced in building full-stack
						applications with Supabase, React Query, and modern data
						fetching patterns. Adept at contributing to highly
						collaborative environments while independently
						architecting solutions and writing clean, reusable code.
						Committed to creating intuitive user experiences through
						thoughtful design implementation and careful attention
						to web accessibility standards.
					</p>
				</section>

				{/* Professional Experience */}
				<section className="mb-8">
					<h2 className="mb-4 border-b pb-2 text-xl font-bold">
						PROFESSIONAL EXPERIENCE
					</h2>

					<div className="mb-6">
						<div className="mb-2 flex justify-between">
							<h3 className="font-bold">
								Lead Frontend Developer
							</h3>
							<p className="text-gray-600 dark:text-gray-400">
								April 2025 - Present
							</p>
						</div>
						<p className="mb-2 text-gray-600 dark:text-gray-400">
							LIFO Data | Netherlands (Remote)
						</p>
						<ul className="ml-5 list-disc space-y-2 text-gray-700 dark:text-gray-300">
							<li>
								Architected frontend infrastructure for
								AI-powered inventory management platform using
								Next.js and TypeScript
							</li>
							<li>
								Built real-time image recognition dashboard with
								React Query for optimized API integration and
								caching
							</li>
							<li>
								Optimized React Query implementation, reducing
								API calls by 70% and significantly improving
								dashboard performance
							</li>
							<li>
								Collaborated with international team across
								multiple time zones, coordinating with backend
								engineers and product designers to deliver MVP
								features within 3-month timeline
							</li>
						</ul>
					</div>

					<div className="mb-6">
						<div className="mb-2 flex justify-between">
							<h3 className="font-bold">
								Freelance Frontend Developer
							</h3>
							<p className="text-gray-600 dark:text-gray-400">
								March 2023 - Present
							</p>
						</div>
						<p className="mb-2 text-gray-600 dark:text-gray-400">
							Independent Contractor
						</p>
						<p className="mb-2 text-gray-600 dark:text-gray-400">
							Sean Patrick Studios
						</p>
						<ul className="ml-5 list-disc space-y-2 text-gray-700 dark:text-gray-300">
							<li>
								Design and develop modern web applications using
								Next.js App Router, TypeScript, and Tailwind CSS
							</li>
							<li>
								Build full-stack applications with Supabase for
								backend services, authentication, and real-time
								database functionality
							</li>
							<li>
								Implement efficient data fetching and state
								management with React Query for optimized API
								integration and caching
							</li>
							<li>
								Create responsive, accessible interfaces with a
								focus on performance and user experience
							</li>
							<li>
								Deploy and maintain applications using Vercel
								and modern CI/CD practices
							</li>
						</ul>
					</div>

					{/* TrendyMinds */}
					<div className="mb-6">
						<div className="mb-2 flex justify-between">
							<h3 className="font-bold">Frontend Developer</h3>
							<p className="text-gray-600 dark:text-gray-400">
								January 2022 - March 2023
							</p>
						</div>
						<p className="mb-2 text-gray-600 dark:text-gray-400">
							TrendyMinds Inc | Indianapolis, IN / St. Petersburg,
							FL (Remote)
						</p>
						<ul className="ml-5 list-disc space-y-2 text-gray-700 dark:text-gray-300">
							<li>
								Architected and developed high-performance web
								applications using Next.js, TypeScript, and
								Tailwind CSS
							</li>
							<li>
								Built reusable component libraries with a strong
								focus on accessibility standards and user
								experience
							</li>
							<li>
								Integrated Craft CMS with modern frontend
								frameworks, creating efficient content
								management workflows
							</li>
							<li>
								Implemented technical SEO solutions and
								performance optimizations, significantly
								improving client site metrics
							</li>
						</ul>
					</div>

					{/* Freelance */}
					<div className="mb-6">
						<div className="mb-2 flex justify-between">
							<h3 className="font-bold">Freelance Developer</h3>
							<p className="text-gray-600 dark:text-gray-400">
								May 2021 - January 2022
							</p>
						</div>
						<p className="mb-2 text-gray-600 dark:text-gray-400">
							Sean Patrick Studios
						</p>
						<ul className="ml-5 list-disc space-y-2 text-gray-700 dark:text-gray-300">
							<li>
								Developed custom, responsive websites using
								Next.js, TypeScript, and Sanity CMS
							</li>
							<li>
								Created intuitive user interfaces with Tailwind
								CSS and custom styling solutions
							</li>
							<li>
								Implemented headless CMS architectures for
								optimal content management and site performance
							</li>
						</ul>
					</div>
				</section>

				{/* Technical Skills */}
				<section className="mb-8">
					<h2 className="mb-4 border-b pb-2 text-xl font-bold">
						TECHNICAL SKILLS
					</h2>
					<div className="grid grid-cols-2 gap-4">
						<div>
							<h3 className="mb-2 font-bold">
								Frontend Development
							</h3>
							<p className="text-gray-700 dark:text-gray-300">
								Astro, Next.js (App Router and Pages Router),
								React, TypeScript, JavaScript, Tailwind CSS,
								CSS/Sass, HTML, Alpine.js
							</p>
						</div>
						<div>
							<h3 className="mb-2 font-bold">
								Backend & Data Services
							</h3>
							<p className="text-gray-700 dark:text-gray-300">
								Supabase, PostgreSQL, React Query, REST APIs,
								Authentication with Clerk, Firebase, Next Auth,
								and Supabase Auth
							</p>
						</div>
						<div>
							<h3 className="mb-2 font-bold">
								Content Management
							</h3>
							<p className="text-gray-700 dark:text-gray-300">
								Sanity CMS, Craft CMS, Headless Architecture,
								WordPress
							</p>
						</div>
						<div>
							<h3 className="mb-2 font-bold">
								Tools & Deployment
							</h3>
							<p className="text-gray-700 dark:text-gray-300">
								Git, GitHub, Vercel, Netlify
							</p>
						</div>
						<div>
							<h3 className="mb-2 font-bold">
								Additional Skills
							</h3>
							<p className="text-gray-700 dark:text-gray-300">
								Web Accessibility (A11y), Performance
								Optimization, SEO
							</p>
						</div>
					</div>
				</section>

				{/* Education */}
				<section>
					<h2 className="mb-4 border-b pb-2 text-xl font-bold">
						EDUCATION
					</h2>
					<div className="grid gap-4">
						<div>
							<div className="mb-2 flex justify-between">
								<h3 className="font-bold">
									University of Kansas
								</h3>
								<p className="text-gray-600 dark:text-gray-400">
									Class of 2014
								</p>
							</div>
							<p className="text-gray-700 dark:text-gray-300">
								BS History & Sociology
							</p>
						</div>
						<div>
							<div className="mb-2 flex justify-between">
								<h3 className="font-bold">
									Le Wagon Coding Bootcamp
								</h3>
								<p className="text-gray-600 dark:text-gray-400">
									2021
								</p>
							</div>
							<p className="text-gray-700 dark:text-gray-300">
								Full-Stack Development Program
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}

export default Resume
