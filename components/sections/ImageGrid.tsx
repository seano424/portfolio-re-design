import type { Project } from '@/sanity.types'
import ImageLink from './ImageLink'

interface Props {
	projects: Project[]
}

const ImageGrid = ({ projects }: Props) => {
	return (
		<section className="container">
			<h2 className="mb-8 text-center text-3xl font-black sm:text-6xl dark:text-white">
				Apps/Websites I&apos;ve Built
			</h2>
			<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
				{projects &&
					projects.map((project) => (
						<ImageLink key={project._id} project={project} />
					))}
			</div>
		</section>
	)
}

export default ImageGrid
