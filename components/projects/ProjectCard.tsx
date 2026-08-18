import Image from 'next/image'
import Typography from '@/components/ui/Typography'
import type { Project } from '@/lib/projects'

type ProjectCardProps = {
	project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	const { title, role, year, image, imageAlt, description, links } = project
	const primaryHref = links[0]?.href

	return (
		<article className="flex flex-col gap-6 rounded-3xl bg-gray-100/70 p-6 sm:flex-row sm:items-start dark:bg-gray-800/60">
			<div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-white sm:aspect-square sm:w-40 dark:border-gray-700">
				<Image
					fill
					src={image}
					alt={imageAlt}
					sizes="(max-width: 640px) 100vw, 160px"
					className="object-cover"
				/>
			</div>

			<div className="flex flex-col gap-3">
				<div className="flex flex-col">
					<Typography
						variant="h4"
						className="text-blue-700 dark:text-blue-200"
					>
						{primaryHref ? (
							<a
								href={primaryHref}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underline-wavy"
							>
								{title}
							</a>
						) : (
							title
						)}
					</Typography>
					{(role || year) && (
						<Typography
							variant="small"
							className="uppercase text-gray-600 dark:text-gray-400"
						>
							{[role, year].filter(Boolean).join(' · ')}
						</Typography>
					)}
				</div>

				<div className="flex flex-col gap-3 leading-relaxed text-gray-900 dark:text-gray-100">
					{description.map((paragraph) => (
						<p key={paragraph.slice(0, 40)}>{paragraph}</p>
					))}
				</div>

				{links.length > 0 && (
					<div className="flex flex-wrap gap-2 pt-1">
						{links.map(({ label, href }) => (
							<a
								key={href}
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								className="rounded-md bg-blue-500 px-3 py-1.5 font-mono text-sm text-white transition-colors duration-300 ease-linear hover:bg-blue-400"
							>
								{label}
							</a>
						))}
					</div>
				)}
			</div>
		</article>
	)
}

export default ProjectCard
