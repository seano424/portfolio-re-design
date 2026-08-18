import type { Metadata } from 'next'
import Typography from '@/components/ui/Typography'
import ProjectCard from '@/components/projects/ProjectCard'
import projects from '@/lib/projects'

export const metadata: Metadata = {
	title: "Projects | Sean O'Reilly",
	description: "Projects Sean O'Reilly has designed and built.",
}

export default function ProjectsPage() {
	return (
		<section id="projects" className="flex flex-col gap-8">
			<Typography
				variant="h2"
				className="italic text-blue-700 dark:text-blue-100"
			>
				Projects
			</Typography>

			<div className="flex flex-col gap-6">
				{projects.map((project) => (
					<ProjectCard key={project.slug} project={project} />
				))}
			</div>
		</section>
	)
}
