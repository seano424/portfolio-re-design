import Typography from '@/components/ui/Typography'
import Image from 'next/image'

const ShowcaseSection = () => {
	return (
		<section
			id="showcase"
			className="container flex min-h-[calc(100vh-5rem)] scroll-mt-20 flex-col gap-8 py-20"
		>
			<div className="flex flex-col gap-2">
				<Typography variant="h1">Latest Projects</Typography>
				<Typography variant="p" className="text-gray-400 italic">
					Here&apos;s a few things I&apos;m involved in right now
				</Typography>
			</div>
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
				<div className="relative aspect-video h-full overflow-hidden rounded-3xl bg-blue-300 p-2">
					<div className="relative h-full w-full overflow-hidden rounded-2xl">
						<Image
							fill
							priority
							src="/images/projects/lifo/lifo-dashboard.png"
							alt="Image"
							className="object-cover object-top"
						/>
					</div>
				</div>
				<div className="relative aspect-video h-full overflow-hidden rounded-3xl bg-blue-300 p-2">
					<div className="relative h-full w-full overflow-hidden rounded-2xl">
						<Image
							fill
							priority
							src="/images/projects/voyage/voyage-away-hero.png"
							alt="Image"
							className="object-cover object-top"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ShowcaseSection
