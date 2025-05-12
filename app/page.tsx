import HeroSection from '@/components/sections/HeroSection'
import ImageGrid from '@/components/sections/ImageGrid'
import AboutSection from '@/components/sections/AboutSection'
import ShowcaseSection from '@/components/sections/ShowcaseSection'
import type { Project } from '@/sanity.types'
import { getMostRecentProjectsQuery } from '@/sanity/lib/queries'
import { client } from '@/sanity/lib/client'

export default async function Home() {
	const projects = await client.fetch<Project[]>(getMostRecentProjectsQuery)

	return (
		<>
			<HeroSection />
			<div className="flex flex-col gap-20 lg:gap-40">
				<ImageGrid projects={projects} />
				<AboutSection />
				<div className="p-2">
					<ShowcaseSection />
				</div>
			</div>
		</>
	)
}
