import Typography from '../ui/Typography'
import StarCanvas from '../ui/StarCanvas'

const skillsets = [
	{
		category: 'Frontend',
		description:
			'I create accessible, responsive websites with a focus on clean design, smooth interactions, and attention to detail.',
		skills: 'React, Next.js, TypeScript, JavaScript, Tailwind CSS, React Query, Web Accessibility (A11y)',
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
		skills: 'Supabase, PostgreSQL, Next Auth, Supabase Auth',
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
		skills: 'Figma, Miro, Canva',
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
		skills: 'GitHub, Vercel, Sanity CMS, Craft CMS, Docker, DigitalOcean',
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
		<section
			id="toolkit"
			className="relative flex scroll-mt-20 flex-col divide-y divide-purple-100 dark:divide-amber-100/0"
		>
			<div className="container">
				<div className="flex flex-col pt-12 pb-6">
					<Typography variant="h1" className="italic">
						Toolkit
					</Typography>
					<Typography variant="p" className="text-gray-400 italic">
						Technologies and tools I use often
					</Typography>
				</div>

				<div className="grid grid-cols-1 gap-6 pt-6 pb-12 lg:grid-cols-2 dark:pt-0">
					{skillsets.map((skillset) => (
						<div
							key={skillset.category}
							className="flex flex-col gap-4 rounded-2xl bg-white p-10 shadow-xl transition-all hover:shadow-md dark:bg-black/0 dark:px-0 dark:py-4"
						>
							<Typography
								variant="h4"
								className="flex items-center gap-1 font-mono"
							>
								{skillset.category}
							</Typography>

							{/* Description */}
							<p className="text-gray-600 dark:text-white">
								{skillset.description}
							</p>

							{/* Skills List */}
							<div className="flex flex-wrap gap-2">
								{skillset.skills.split(', ').map((skill) => (
									<span
										key={skill}
										className="cursor-hover rounded-full bg-sky-50 px-3 py-1 font-mono text-sm dark:bg-blue-500 dark:text-white"
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
			<StarCanvas visible={true} />
		</section>
	)
}
