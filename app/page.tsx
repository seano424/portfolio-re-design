import { client } from '@/sanity/lib/client'
import type { Project } from '@/sanity.types'
import HeroSection from '@/components/sections/HeroSection'
import ShowcaseSection from '@/components/sections/ShowcaseSection'
import { getMostRecentProjectsQuery } from '@/sanity/lib/queries'

export default async function Home() {
	const projects = await client.fetch<Project[]>(getMostRecentProjectsQuery)

	return (
		<>
			<HeroSection />
			<ShowcaseSection projects={projects} />
		</>
	)
}
