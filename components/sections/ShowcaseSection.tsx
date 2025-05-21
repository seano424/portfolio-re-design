import Image from 'next/image'

const ShowcaseSection = () => {
	return (
		<a
			id="showcase"
			target="_blank"
			rel="noopener noreferrer"
			href="https://voyage-away.vercel.app/"
			className="relative container flex min-h-[500px] items-center justify-center rounded-2xl border-8 bg-fuchsia-700"
		>
			<Image
				fill
				priority
				src="/images/projects/voyage/voyage-2.jpeg"
				alt="Image"
				className="rounded-2xl object-cover object-top"
			/>
			<div className="absolute inset-0 flex flex-col items-center justify-center bg-fuchsia-700/90 text-white">
				<h1 className="text-center text-6xl font-black sm:text-8xl">
					Currently Working On
				</h1>
			</div>
		</a>
	)
}

export default ShowcaseSection
