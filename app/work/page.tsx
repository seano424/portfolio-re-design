import Typography from '@/components/ui/Typography'
import WorkExperience from '@/components/ui/WorkExperience'
import { formatDuration } from '@/lib/dateUtils'
import Image from 'next/image'

const workExperiences = [
	{
		company: 'LIFO AI',
		imageUrl: '/images/projects/lifo/logo.svg',
		role: 'Software Engineer',
		location: 'Remote',
		date: 'October 2024 - Present',
		duration: formatDuration('2024-11-01'),
		description: [
			'Directed critical technical decisions for the full stack, resulting in enhanced performance of the Next.js/TypeScript frontend and improved reliability of Digital Ocean infrastructure',
			'Frontend-focused engineer leading development across multiple products from architecture and low-level design to implementation and delivery.',
			'Collaborated with international team across multiple time zones, coordinating with backend engineers and product designers to deliver MVP features within 3-month timeline',
		],
	},
	{
		company: 'VoyageAway',
		imageUrl: '/images/projects/voyage/logo.webp',
		role: 'Software Engineer - Full Stack',
		location: 'Remote',
		date: 'December 2024 - Present',
		duration: formatDuration('2024-08-01'),
		description: [
			'Architected and developed a comprehensive adventure travel platform that connects travelers with curated outdoor activities worldwide',
			'Building complex database relationships and views in Supabase to handle adventures, destinations, wildlife tracking, seasonal data, and user-generated content',
			'Implementing advanced search functionality with full-text search, filtering, and location-based queries across multiple entity types',
			'Developing user engagement features including likes, saves, reviews, comments, and community-driven content curation',
			'Integrating real-time features for user interactions, notifications, and collaborative content creation',
		],
	},
	{
		company: 'TrendyMinds',
		imageUrl: '/images/projects/trendyminds/logo.jpeg',
		role: 'Software Engineer',
		location: 'Indianapolis, IN',
		date: 'January 2022 - July 2023',
		duration: formatDuration('2022-01-01', '2023-07-01'),
		description: [
			'Worked on legacy codebases in order to make modifications and improvements',
			'Solution customizations and development for specific customer needs',
			'Implemented technical SEO solutions and performance optimizations, significantly improving client site metrics',
		],
	},
]

const tools = [
	{
		name: 'Claude',
		imageUrl: '/images/tools/claude.svg',
	},
	{
		name: 'OpenAI',
		imageUrl: '/images/tools/openai.svg',
	},
	{
		name: 'Cursor',
		imageUrl: '/images/tools/cursor.svg',
	},
	{
		name: 'Docker',
		imageUrl: '/images/tools/docker.svg',
	},
	{
		name: 'TypeScript',
		imageUrl: '/images/tools/ts.svg',
	},
	{
		name: 'Next.js',
		imageUrl: '/images/tools/nextjs.svg',
	},
	{
		name: 'React',
		imageUrl: '/images/tools/react.svg',
	},
	{
		name: 'Tailwind CSS',
		imageUrl: '/images/tools/tailwind.svg',
	},
	{
		name: 'Supabase',
		imageUrl: '/images/tools/supabase.svg',
	},
	{
		name: 'GitHub',
		imageUrl: '/images/tools/github.svg',
	},
]

export default function WorkPage() {
	return (
		<div className="container flex max-w-2xl flex-col divide-y divide-gray-200">
			<div className="flex flex-col gap-2 py-8">
				<Typography variant="p" className="text-gray-400 italic">
					Professional Journey
				</Typography>
			</div>

			<div className="py-8">
				<Typography
					variant="small"
					className="text-sm tracking-widest text-gray-400 uppercase dark:text-gray-100"
				>
					Experience
				</Typography>
				<WorkExperience workExperiences={workExperiences} />
			</div>

			<div className="flex flex-col gap-4 py-8">
				<Typography
					variant="small"
					className="text-sm tracking-widest text-gray-400 uppercase dark:text-gray-100"
				>
					Tools & Technologies
				</Typography>
				<div className="flex flex-wrap gap-4">
					{tools.map((tool) => (
						<div
							key={tool.name}
							title={tool.name}
							className="relative h-8 w-8 flex-shrink-0 overflow-hidden lg:h-10 lg:w-10 dark:rounded dark:bg-white"
						>
							<Image
								src={tool.imageUrl}
								alt={tool.name}
								fill
								sizes="100px"
								className="object-contain dark:p-1"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
