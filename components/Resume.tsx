'use client'

import { useRef } from 'react'
import { Mail, Phone } from 'lucide-react'
import { useReactToPrint } from 'react-to-print'

const Resume = () => {
	const contentRef = useRef<HTMLDivElement>(null)
	const reactToPrintFn = useReactToPrint({
		contentRef,
		documentTitle: "Sean O'Reilly's Resume",
		onPrintError: (error) => console.error(error),
		onAfterPrint: () => console.log('Printed!'),
	})

	return (
		<div className="container mx-auto flex max-w-4xl flex-col items-center justify-center bg-white p-8 dark:bg-gray-900 dark:text-white">
			<button
				className="cursor-hover mb-5 rounded-md bg-gradient-to-br from-purple-500 to-blue-500 bg-size-200 bg-pos-0 px-4 py-2 font-mono font-bold uppercase text-white transition-all duration-500 ease-linear hover:bg-pos-100"
				onClick={() => reactToPrintFn()}
			>
				Download
			</button>
			<div ref={contentRef}>
				{/* Header */}
				<header className="mb-8 text-center">
					<h1 className="mb-2 text-5xl font-black text-gray-900 md:text-6xl dark:text-white">
						SEAN O&apos;REILLY
					</h1>
					<h2 className="mb-1 text-xl font-black text-blue-500 dark:text-purple-500">
						FRONTEND DEVELOPER
					</h2>
					<a
						href="https://seanoreilly.me"
						className="text-gray-600 dark:text-gray-400"
					>
						SEANOREILLY.ME
					</a>
				</header>

				{/* Contact Info */}
				<div className="mb-8 flex justify-center gap-6 text-gray-600 dark:text-gray-400">
					<a
						href="mailto:soreilly424@gmail.com"
						className="flex items-center gap-1"
					>
						<Mail className="h-4 w-4" />
						soreilly424@gmail.com
					</a>
					<a
						href="tel:+19139610388"
						className="flex items-center gap-1"
					>
						<Phone className="h-4 w-4" />
						+1 913-961-0388
					</a>
					<a
						href="https://github.com/seano424"
						className="flex items-center gap-1"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-github"
						>
							<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
							<path d="M9 18c-4.51 2-5-2-7-2" />
						</svg>
						@seano424
					</a>
					<a
						href="https://linkedin.com/in/sea-oreilly"
						className="flex items-center gap-1"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-linkedin"
						>
							<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
							<rect width="4" height="12" x="2" y="9" />
							<circle cx="4" cy="4" r="2" />
						</svg>
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
						modern JavaScript. Adept at contributing to highly
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
								Next.js, TypeScript, and Tailwind CSS
							</li>
							<li>
								Implement headless CMS solutions with Sanity for
								efficient content management
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
								Next.js, React, TypeScript, JavaScript, Tailwind
								CSS, CSS/Sass
							</p>
						</div>
						<div>
							<h3 className="mb-2 font-bold">
								Content Management
							</h3>
							<p className="text-gray-700 dark:text-gray-300">
								Sanity CMS, Craft CMS, Headless Architecture
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
