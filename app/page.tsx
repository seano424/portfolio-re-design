import HeroSection from '@/components/sections/HeroSection'
import ImageGrid from '@/components/sections/ImageGrid'
import AboutSection from '@/components/sections/AboutSection'

export default function Home() {
	return (
		<>
			<HeroSection />
			<div className="flex flex-col gap-20 lg:gap-40">
				<ImageGrid />
				<AboutSection />
			</div>
		</>
	)
}
