import clsx from 'clsx'
import Image from 'next/image'

const links = [
	{
		image: '/images/projects/voyage/voyage-2.jpeg',
		title: 'Voyage Away',
		link: 'https://voyage-away-subscription-starter.vercel.app/',
	},
	{
		image: '/images/projects/kmb/kmb-2.jpeg',
		title: 'KMB',
		link: 'https://www.karriemariebaxley.com/',
	},
	{
		image: '/images/projects/ftlwd/ftlwd-2.jpeg',
		title: 'FTLWD',
		link: 'https://www.fromthelodgewithdaniel.com/',
	},
]

const ImageGrid = () => {
	return (
		<section className="container">
			<h2 className={clsx('mb-8 text-5xl font-black dark:text-white')}>
				Here’s a few things I’m involved in right now:
			</h2>
			<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
				{links.map(({ image, title, link }, index) => (
					<a
						rel="noopener noreferrer"
						target="_blank"
						key={index}
						href={link}
						className="relative h-[400px] w-full lg:aspect-square"
					>
						<Image
							fill
							priority
							src={image}
							alt={title}
							className="rounded-2xl object-cover object-top"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</a>
				))}
			</div>
		</section>
	)
}

export default ImageGrid
