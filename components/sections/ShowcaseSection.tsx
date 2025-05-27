import Image from 'next/image'
import ImageGrid from './ImageGrid'
import type { Project } from '@/sanity.types'

interface Props {
	projects: Project[]
}

const ShowcaseSection = ({ projects }: Props) => {
	return (
		<section id="showcase" className="flex flex-col gap-8 container">
			<ImageGrid projects={projects} />
			<div className="container">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://voyage-away.vercel.app"
					className="relative container flex min-h-[500px] items-center justify-center rounded-2xl border-8 bg-fuchsia-700"
				>
					<Image
						fill
						priority
						src="/images/projects/voyage/voyage-2.jpeg"
						alt="Image"
						className="rounded-2xl object-cover object-top"
					/>
					<div className="absolute inset-0 flex flex-col items-center justify-center bg-fuchsia-700/90 text-white">
						<h1 className="text-center text-6xl font-black">
							Currently Working On...
						</h1>
					</div>
				</a>
			</div>
		</section>
	)
}

export default ShowcaseSection
