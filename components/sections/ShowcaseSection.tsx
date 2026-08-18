import Typography from '@/components/ui/Typography'
import WorkExperience from '@/components/ui/WorkExperience'
import { formatDuration } from '@/lib/dateUtils'
import Image from 'next/image'
import Link from 'next/link'
import StarCanvas from '@/components/ui/StarCanvas'

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

const voyageAwayLabsWorkExperiences = [
	{
		company: 'VoyageAway Labs',
		role: 'Prototype',
		location: 'Remote',
		date: '2026',
		duration: formatDuration('2026-01-01'),
		description:
			'An animated 3D globe of whale shark movement built with the ArcGIS Maps SDK for JavaScript, from GBIF occurrence data. The interesting part was not the rendering. The 12,000 records turned out to be satellite telemetry from 183 tagged individuals, not sightings, so rendered raw the map would have shown tagging-program funding rather than species distribution. I encoded distinct individuals per cell instead of record counts, derived a track-segmentation threshold from the actual gap distribution rather than guessing at one, and styled acoustic detections differently from satellite paths, since receiver stations tell you presence, not a route.',
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
		<div className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center bg-white/60 dark:bg-gray-900/0">
			<StarCanvas visible={true} />
			<section id="showcase" className="flex flex-col ">
				<Typography
					variant="h2"
					className="italic text-blue-700 dark:text-blue-100"
				>
					Latest Projects
				</Typography>

				<div className="flex flex-col ">
					<Link
						href="https://voyage-away.vercel.app/labs/whale-shark"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="flex flex-col-reverse gap-4 py-12">
							<div className="px-8">
								<WorkExperience
									workExperiences={
										voyageAwayLabsWorkExperiences
									}
								/>
							</div>
							<div className="relative aspect-video w-full overflow-hidden rounded-4xl border border-gray-100 shadow-lg dark:border-4 dark:border-blue-300">
								<Image
									fill
									src="/images/voyageaway-labs.png"
									alt="Animated 3D globe of whale shark movement"
									sizes="(max-width: 1024px) 100vw, 50vw"
									className="rounded-4xl object-cover object-top p-1 transition-all duration-1000 ease-in-out hover:scale-105"
								/>
							</div>
						</div>
					</Link>
					<Link
						href="https://lifo-app.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="flex flex-col gap-4 py-12">
							<div className="relative aspect-video w-full overflow-hidden rounded-4xl border border-gray-100 shadow-lg dark:border-4 dark:border-fuchsia-400">
								<Image
									fill
									preload
									src="/images/projects/lifo/lifo-dashboard.png"
									alt="Image"
									sizes="(max-width: 1024px) 100vw, 50vw"
									className="rounded-4xl object-cover object-top p-1 transition-all duration-1000 ease-in-out hover:scale-105 dark:hidden"
								/>
								<Image
									fill
									preload
									src="/images/projects/lifo/lifo-dark.jpeg"
									alt="Image"
									sizes="(max-width: 1024px) 100vw, 50vw"
									className="hidden rounded-4xl object-cover object-top p-1 transition-all duration-1000 ease-in-out hover:scale-105 dark:block"
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
						<div className="flex flex-col-reverse gap-4 py-12">
							<div className="px-8">
								<WorkExperience
									workExperiences={VoyageAwayWorkExperiences}
								/>
							</div>
							<div className="relative aspect-video w-full overflow-hidden rounded-4xl border border-gray-100 shadow-lg dark:border-4 dark:border-purple-500">
								<Image
									fill
									preload
									src="/images/projects/voyage/voyage-away-hero.png"
									alt="Image"
									sizes="(max-width: 1024px) 100vw, 50vw"
									className="rounded-4xl object-cover object-top p-1 transition-all duration-1000 ease-in-out hover:scale-105 dark:hidden"
								/>
								<Image
									fill
									preload
									src="/images/projects/voyage/voyage-away-dark.jpeg"
									alt="Image"
									sizes="(max-width: 1024px) 100vw, 50vw"
									className="hidden rounded-4xl object-cover object-top p-1 transition-all duration-1000 ease-in-out hover:scale-105 dark:block"
								/>
							</div>
						</div>
					</Link>
				</div>
			</section>
		</div>
	)
}

export default ShowcaseSection
