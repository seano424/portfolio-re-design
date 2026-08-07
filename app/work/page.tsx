import Typography from '@/components/ui/Typography'
import WorkExperience from '@/components/ui/WorkExperience'
import { formatDuration } from '@/lib/dateUtils'
import ShowCaseSection from '@/components/sections/ShowcaseSection'
import SkillsetSection from '@/components/sections/SkillsetSection'

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

export default function WorkPage() {
	return (
		<div className="flex flex-col gap-12">
			<div className="flex flex-col">
				<Typography
					variant="h2"
					className="italic text-blue-700 dark:text-blue-100"
				>
					Professional Journey
				</Typography>

				<WorkExperience workExperiences={workExperiences} />
			</div>
			<ShowCaseSection />

			<SkillsetSection />
		</div>
	)
}
