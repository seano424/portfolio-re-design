export default function PostsLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<section className="mx-auto flex max-w-2xl flex-col gap-4">
			{children}
		</section>
	)
}
