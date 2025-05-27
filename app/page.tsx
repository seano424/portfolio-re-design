import { client } from '@/sanity/lib/client'
import type { Project } from '@/sanity.types'
import HeroSection from '@/components/sections/HeroSection'
import ImageGrid from '@/components/sections/ImageGrid'
import AboutSection from '@/components/sections/AboutSection'
import ShowcaseSection from '@/components/sections/ShowcaseSection'
import { getMostRecentProjectsQuery } from '@/sanity/lib/queries'
import ExperienceSection from '@/components/sections/ExperienceSection'

export default async function Home() {
	const projects = await client.fetch<Project[]>(getMostRecentProjectsQuery)

	return (
		<>
			<HeroSection />
			<div className="flex flex-col gap-20 lg:gap-40">
				<ExperienceSection />
				<ShowcaseSection projects={projects} />
				<AboutSection />
			</div>
		</>
	)
}
