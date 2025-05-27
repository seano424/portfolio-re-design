import type { Project } from '@/sanity.types'
import ImageLink from './ImageLink'

interface Props {
	projects: Project[]
}

const ImageGrid = ({ projects }: Props) => {
	return (
		<section className="container flex flex-col gap-8">
			<div className="flex flex-col gap-2">
				<h2 className="text-center text-3xl font-black sm:text-6xl dark:text-white">
					Projects
				</h2>
				<h5 className="text-center text-gray-500 dark:text-gray-400">
					Here are some of the projects I have worked on.
				</h5>
			</div>
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
