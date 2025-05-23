import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import type { Project } from '@/sanity.types'

export default function ImageLink({ project }: { project: Project }) {
	if (!project.title || !project.featuredImage) {
		return null
	}

	return (
		<a
			// href={`/project-gallery/${project.slug?.current}`}
			href={project.liveUrl || ''}
			className="relative h-[400px] w-full lg:aspect-square"
			target="_blank"
			rel="noopener noreferrer"
		>
			<Image
				fill
				priority
				src={urlFor(project.featuredImage).url()}
				alt={project.title}
				className="rounded-2xl object-cover object-top"
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
			/>
		</a>
	)
}
