const skillsets = [
	{
		category: 'Frontend',
		description:
			'I create accessible, responsive websites with a focus on clean design, smooth interactions, and attention to detail.',
		skills: 'React, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Astro, Alpine.js, React Query',
		icons: [
			{ name: 'React', icon: '⚛️' },
			{ name: 'Next.js', icon: '▲' },
			{ name: 'TypeScript', icon: 'TS' },
			{ name: 'JavaScript', icon: 'JS' },
		],
	},
	{
		category: 'Backend',
		description:
			'I build reliable and efficient backend systems, ensuring smooth performance and seamless integration.',
		skills: 'Supabase, PostgreSQL, REST APIs, Clerk, Firebase, Next Auth, Supabase Auth',
		icons: [
			{ name: 'Supabase', icon: '🔥' },
			{ name: 'PostgreSQL', icon: '🐘' },
			{ name: 'API', icon: '🔌' },
			{ name: 'Auth', icon: '🔐' },
		],
	},
	{
		category: 'Web & UI Design',
		description:
			"I'm not a designer, but I like to design and develop beautiful and user-friendly interfaces.",
		skills: 'Figma, Responsive Design, Web Accessibility (A11y), Performance Optimization, SEO',
		icons: [
			{ name: 'Figma', icon: '🎨' },
			{ name: 'Design', icon: '✨' },
			{ name: 'A11y', icon: '♿' },
			{ name: 'SEO', icon: '📈' },
		],
	},
	{
		category: 'Tools & Environment',
		description:
			'I use tools that optimize development and deployment, ensuring efficient workflows and reliable infrastructure.',
		skills: 'Git, GitHub, Vercel, Netlify, Sanity CMS, Craft CMS, WordPress, CI/CD',
		icons: [
			{ name: 'Git', icon: '📦' },
			{ name: 'Vercel', icon: '▲' },
			{ name: 'GitHub', icon: '🐙' },
			{ name: 'CMS', icon: '📝' },
		],
	},
]

export default function SkillsetSection() {
	return (
		<section id="toolkit" className="container flex flex-col gap-8">
			<div className="flex flex-col gap-2">
				<h2 className="text-center text-3xl font-black sm:text-6xl dark:text-white">
					Toolkit
				</h2>
				<h5 className="text-center text-gray-500 dark:text-gray-400">
					Technologies and tools I use often
				</h5>
			</div>

			<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
				{skillsets.map((skillset) => (
					<div
						key={skillset.category}
						className="flex flex-col gap-4 rounded-2xl bg-white p-10 shadow-xl transition-all hover:shadow-md"
					>
						<h3 className="text-xl font-black text-blue-500 dark:text-purple-500">
							{skillset.category}
						</h3>

						{/* Description */}
						<p className="text-gray-600 dark:text-gray-300">
							{skillset.description}
						</p>

						{/* Skills List */}
						<div className="flex flex-wrap gap-2">
							{skillset.skills.split(', ').map((skill) => (
								<span
									key={skill}
									className="cursor-hover rounded-full bg-sky-50 px-3 py-1"
								>
									{skill}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
