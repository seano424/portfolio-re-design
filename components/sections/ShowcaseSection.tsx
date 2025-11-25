import Typography from '@/components/ui/Typography'
import WorkExperience from '@/components/ui/WorkExperience'
import { formatDuration } from '@/lib/dateUtils'
import Image from 'next/image'
import Link from 'next/link'

const lifoWorkExperiences = [
	{
		company: 'LIFO',
		// imageUrl: '/images/projects/lifo/logo.svg',
		role: 'Technical Lead/Co-Founder',
		location: 'Remote',
		date: 'October 2024 - Present',
		duration: formatDuration('2024-11-01'),
		description:
			'LIFO is an expiration tracking layer for retailers. It adds batch level inventory intelligence, tracking which specific product batches expire when, on top of POS systems like Square that only track total quantity. As items sell, LIFO automatically depletes the oldest batches first and alerts store managers before products expire, helping them discount or donate instead of waste.',
	},
]

const VoyageAwayWorkExperiences = [
	{
		company: 'VoyageAway',
		role: 'Founder & Developer',
		location: 'Remote',
		date: 'December 2024 - Present',
		duration: formatDuration('2024-08-01'),
		description:
			'VoyageAway is a community driven adventure travel platform that connects travelers with wildlife rich experiences around the world while directly funding conservation efforts. Users can discover and share adventures like scuba diving, hiking, and wildlife safaris, contribute wildlife sightings, and create collections, all while a portion of their subscription supports the ecosystems and places they explore. Think iNaturalist meets AllTrails with a conservation mission built in.',
	},
]

const ShowcaseSection = () => {
	return (
		<section
			id="showcase"
			className="container flex min-h-[calc(100vh-5rem)] scroll-mt-20 flex-col divide-y divide-purple-100"
		>
			<div className="flex flex-col py-12">
				<Typography variant="h1" className="italic">
					Latest Projects
				</Typography>
				<Typography variant="p" className="text-gray-400 italic">
					Here&apos;s a few things I&apos;m involved in right now
				</Typography>
			</div>
			<div className="flex flex-col divide-y divide-purple-100">
				<Link
					href="https://lifo-app.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="flex flex-col gap-4 py-12 lg:grid lg:grid-cols-2">
						<div className="relative aspect-video w-full overflow-hidden rounded-4xl border border-gray-100 shadow-lg dark:border-0">
							<Image
								fill
								priority
								src="/images/projects/lifo/lifo-dashboard.png"
								alt="Image"
								className="rounded-4xl object-cover object-top p-1 transition-all duration-1000 ease-in-out hover:scale-105"
							/>
						</div>
						<div className="px-8">
							<WorkExperience
								workExperiences={lifoWorkExperiences}
							/>
						</div>
					</div>
				</Link>
				<Link
					href="https://voyage-away.vercel.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="flex flex-col-reverse gap-4 py-12 lg:grid lg:grid-cols-2">
						<div className="px-8">
							<WorkExperience
								workExperiences={VoyageAwayWorkExperiences}
							/>
						</div>
						<div className="relative aspect-video w-full overflow-hidden rounded-4xl border border-gray-100 shadow-lg dark:border-0">
							<Image
								fill
								priority
								src="/images/projects/voyage/voyage-away-hero.png"
								alt="Image"
								className="rounded-4xl object-cover object-top p-1 transition-all duration-1000 ease-in-out hover:scale-105"
							/>
						</div>
					</div>
				</Link>
			</div>
		</section>
	)
}

export default ShowcaseSection
