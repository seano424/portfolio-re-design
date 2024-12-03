import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/sanity.types'

interface Props {
	projects: Project[]
}

const ImageGrid = ({ projects }: Props) => {
	console.log(projects)

	return (
		<section className="container">
			<h2 className={clsx('mb-8 text-5xl font-black dark:text-white')}>
				Here’s a few things I’m involved in right now:
			</h2>
			<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
				{projects &&
					projects.map(({ featuredImage, title, slug }, index) => (
						<Link
							key={index}
							href={`/project-gallery/${slug?.current}`}
							className="relative h-[400px] w-full lg:aspect-square"
						>
							{/* <Image
							fill
							priority
							src={featuredImage?.asset?.url ?? ''}
							alt={title ?? ''}
							className="rounded-2xl object-cover object-top"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/> */}
						</Link>
					))}
			</div>
		</section>
	)
}

export default ImageGrid
