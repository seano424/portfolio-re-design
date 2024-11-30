import clsx from 'clsx'
import Image from 'next/image'

const images = [
	'/images/projects/voyage/voyage-2.jpeg',
	'/images/projects/kmb/kmb-2.jpeg',
	'/images/projects/ftlwd/ftlwd-2.jpeg',
]

const ImageGrid = () => {
	return (
		<section className="container">
			<h2 className={clsx('mb-8 text-5xl font-black dark:text-white')}>
				Here’s a few things I’m involved in right now:
			</h2>
			<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
				{images.map((image, index) => (
					<div
						key={index}
						className="relative h-[400px] w-full lg:aspect-square"
					>
						<Image
							fill
							priority
							src={image}
							alt="Image"
							className="rounded-2xl object-cover object-top"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
				))}
			</div>
		</section>
	)
}

export default ImageGrid
