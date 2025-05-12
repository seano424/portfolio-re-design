import clsx from 'clsx'
import type { Project } from '@/sanity.types'
import ImageLink from './ImageLink'

interface Props {
	projects: Project[]
}

const ImageGrid = ({ projects }: Props) => {
	console.log(projects, 'projects')
	return (
		<section className="container">
			<h2 className={clsx('mb-8 text-5xl font-black dark:text-white')}>
				Here’s a few things I’m involved in right now:
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
