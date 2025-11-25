import HeroSection from '@/components/sections/HeroSection'
import ShowcaseSection from '@/components/sections/ShowcaseSection'
import SkillsetSection from '@/components/sections/SkillsetSection'

export default async function Home() {
	return (
		<>
			<HeroSection />
			<ShowcaseSection />
			<SkillsetSection />
		</>
	)
}
