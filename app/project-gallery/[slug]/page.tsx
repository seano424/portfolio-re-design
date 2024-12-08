export default async function ProjectGalleryPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const slug = (await params).slug
	
	return (
		<div className="container dark:text-white">
			I am the project gallery page for {slug}
		</div>
	)
}
