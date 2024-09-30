import Image from 'next/image'

const images = [
	'/images/dummy-1.jpg',
	'/images/dummy-2.jpg',
	'/images/dummy-3.jpg',
]

const ImageGrid = () => {
	return (
		<section className="container">
			<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
				{images.map((image, index) => (
					<div
						key={index}
						className="relative h-[400px] w-full lg:aspect-square"
					>
						<Image
							fill
							src={image}
							alt="Image"
							className="rounded-2xl object-cover object-center"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
				))}
			</div>
		</section>
	)
}

export default ImageGrid
