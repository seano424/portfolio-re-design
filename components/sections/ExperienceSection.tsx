import Image from 'next/image'

const experiences = [
	{
		company: 'VoyageAway',
		image: '/images/voyageaway.jpeg',
		role: 'Software Engineer - Full Stack',
		location: 'Remote',
		date: 'December 2024 - Present (6 months)',
		description: [
			'Architecting and developing a comprehensive adventure travel platform that connects travelers with curated outdoor activities worldwide',
			'Building complex database relationships and views in Supabase to handle adventures, destinations, wildlife tracking, seasonal data, and user-generated content',
			'Implementing advanced search functionality with full-text search, filtering, and location-based queries across multiple entity types',
			'Developing user engagement features including likes, saves, reviews, comments, and community-driven content curation',
			'Creating responsive UI components with React and Tailwind CSS for seamless mobile and desktop experiences',
			'Integrating real-time features for user interactions, notifications, and collaborative content creation',
		],
		skills: [
			'TypeScript',
			'React',
			'Next.js App Router',
			'Supabase',
			'PostgreSQL',
			'Tailwind CSS',
			'Full-text Search',
			'Geospatial Queries',
			'Real-time Features',
			'Complex Database Design',
			'RESTful APIs',
			'User Authentication',
			'Content Management',
			'Responsive Design',
			'Git',
			'Vercel',
		],
	},
	{
		company: 'SeanPatrickStudios',
		image: '/images/seanpatrickstudios.jpeg',
		role: 'Freelance Developer',
		location: 'Remote',
		date: 'March 2024 - Present (1 year 2 months)',
		description: [
			'Design and develop modern web applications using Next.js App Router, TypeScript, and Tailwind CSS',
			'Build full-stack applications with Supabase for backend services, authentication, and real-time database functionality',
			'Deploy and maintain applications using Vercel and modern CI/CD and DevOps practices',
		],
		skills: [
			'TypeScript',
			'React',
			'Next.js',
			'HTML',
			'CSS',
			'GitHub',
			'Tailwind CSS',
			'Supabase',
			'Vercel',
			'GitHub Actions',
			'GitLab CI/CD',
			'Docker',
			'Kubernetes',
			'AWS',
		],
	},
	{
		company: 'TrendyMinds',
		image: '/images/trendyminds.jpeg',
		role: 'Software Engineer',
		location: 'Indianapolis, IN',
		date: 'June 2023 - July 2023 (1 year 7 months)',
		description: [
			'Worked on legacy codebases in order to make modifications and improvements',
			'Solution customizations and development for specific customer needs',
			'Implemented technical SEO solutions and performance optimizations, significantly improving client site metrics',
		],
		skills: [
			'WordPress',
			'PHP',
			'MySQL',
			'JavaScript',
			'TypeScript',
			'React',
			'Next.js',
			'HTML',
			'CSS',
			'GitHub',
			'Alpine.js',
			'Twig',
			'Tailwind CSS',
		],
	},
]
export default function ExperienceSection() {
	return (
		<section id="experience" className="container">
			<div className="mb-8 flex flex-col gap-2">
				<h2 className="text-center text-3xl font-black sm:text-6xl dark:text-white">
					Experience
				</h2>
				<h5 className="text-center text-gray-500 dark:text-gray-400">
					Here are some of the companies I have worked for.
				</h5>
			</div>

			<div className="flex flex-col gap-6">
				{experiences.map((experience) => (
					<div key={experience.company} className="flex gap-6">
						<div className="flex flex-col items-center gap-3">
							<div className="relative aspect-square h-10 w-10 rounded-xl bg-white">
								<Image
									fill
									src={experience.image}
									alt={experience.company}
									className="rounded-xl object-cover"
								/>

								{/* line going down from the image */}
							</div>
							<div className="h-full w-px bg-gray-200"></div>
						</div>

						<div className="flex flex-col gap-4">
							<div className="flex flex-col">
								<h3 className="text-base font-bold text-gray-900 dark:text-white">
									{experience.company}
								</h3>
								<p className="text-sm font-medium text-gray-500 dark:text-gray-200">
									{experience.role}
									<span className="ml-1 text-gray-500 italic dark:text-gray-400">
										{experience.location}
									</span>
								</p>
								<div className="flex items-center gap-2">
									<span className="text-sm font-medium text-gray-500 dark:text-gray-200">
										{experience.date}
									</span>
								</div>
							</div>

							<div className="flex flex-col gap-1">
								<div className="flex flex-col gap-1">
									{experience.description.map(
										(description) => (
											<p
												key={description}
												className="text-sm text-gray-500 dark:text-gray-300"
											>
												- {description}
											</p>
										)
									)}
								</div>
							</div>

							<div className="flex flex-wrap gap-1">
								{experience.skills.map((skill) => (
									<span
										key={skill}
										className="rounded-xl border border-gray-200 px-2 py-1 text-xs font-medium text-gray-500 dark:border-white dark:text-white"
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
