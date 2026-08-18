export type ProjectLink = {
	label: string
	href: string
}

export type Project = {
	slug: string
	title: string
	role?: string
	year?: string
	image: string
	imageAlt: string
	description: string[]
	links: ProjectLink[]
}

export const projects: Project[] = [
	{
		slug: 'voyageaway',
		title: 'VoyageAway',
		role: 'Founder & Developer',
		year: '2024 - Present',
		image: '/images/voyageaway.jpeg',
		imageAlt: 'VoyageAway adventure travel platform',
		description: [
			'VoyageAway is a community driven adventure travel platform that connects travelers with wildlife rich experiences around the world while directly funding conservation efforts. Users can discover and share adventures like scuba diving, hiking, and wildlife safaris, contribute wildlife sightings, and create collections, all while a portion of their subscription supports the ecosystems and places they explore. Think iNaturalist meets AllTrails with a conservation mission built in.',
		],
		links: [{ label: 'Live site', href: 'https://voyage-away.vercel.app/' }],
	},
	{
		slug: 'voyageaway-labs',
		title: 'VoyageAway Labs — Whale Shark Globe',
		role: 'Prototype',
		year: '2026',
		image: '/images/voyageaway-labs.png',
		imageAlt: 'Animated 3D globe of whale shark movement',
		description: [
			'I built a prototype using the ArcGIS Maps SDK for JavaScript — an animated 3D globe of whale shark movement, from GBIF occurrence data.',
			'The interesting part wasn’t the rendering. The 12,000 records turned out to be satellite telemetry from 183 tagged individuals, not sightings — one shark’s tag accounted for 525 pings. Rendered raw, the map would have shown tagging-program funding rather than species distribution. So I encoded distinct individuals per cell instead of record counts, derived a track-segmentation threshold from the actual gap distribution rather than guessing at one, and styled acoustic detections differently from satellite paths, since receiver stations tell you presence, not a route.',
			'It’s built on SDK 5.1 with the current map-components pattern rather than the deprecated widgets, running inside a Next.js App Router app.',
		],
		links: [
			{
				label: 'Live demo',
				href: 'https://voyage-away.vercel.app/labs/whale-shark',
			},
			{
				label: 'GBIF data',
				href: 'https://www.gbif.org/occurrence/download/0022205-260806074905277',
			},
		],
	},
]

export default projects
