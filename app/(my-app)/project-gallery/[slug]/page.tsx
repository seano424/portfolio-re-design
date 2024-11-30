export default function ProjectGalleryPage({
	params,
}: {
	params: { slug: string }
}) {
	return (
		<div className="container dark:text-white">
			I am the project gallery page for {params.slug}
		</div>
	)
}
