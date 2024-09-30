import HeroSection from '@/components/sections/HeroSection'
import ImageGrid from '@/components/sections/ImageGrid'
import AboutSection from '@/components/sections/AboutSection'

export default function Home() {
	return (
		<div className="flex flex-col gap-20">
			<HeroSection />
			<ImageGrid />
			<AboutSection />
		</div>
	)
}
