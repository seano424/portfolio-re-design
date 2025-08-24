import { client } from '@/sanity/lib/client'
import type { Project } from '@/sanity.types'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ShowcaseSection from '@/components/sections/ShowcaseSection'
import { getMostRecentProjectsQuery } from '@/sanity/lib/queries'
import SkillsetSection from '@/components/sections/SkillsetSection'

export default async function Home() {
	const projects = await client.fetch<Project[]>(getMostRecentProjectsQuery)

	return (
		<>
			<div className="flex flex-col gap-20">
				<HeroSection />
				{/* <ExperienceSection /> */}
				<ShowcaseSection projects={projects} />
				<SkillsetSection />
				<AboutSection />
			</div>
		</>
	)
}
