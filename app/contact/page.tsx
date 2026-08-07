import socialLinks from '@/lib/socialLinks'
import Image from 'next/image'
import Typography from '@/components/ui/Typography'

export default function ContactPage() {
	return (
		<div className="mx-auto flex max-w-5xl items-center justify-center text-gray-800 sm:gap-10 dark:text-gray-100 py-20 flex-col sm:flex-row">
			<div className="relative aspect-square h-32 sm:h-64">
				<a href="mailto:soreilly424@gmail.com">
					<Image
						fill
						preload
						sizes="(max-width: 1024px) 100vw, 50vw"
						className="cursor-hover rounded-4xl object-cover grayscale"
						src="/images/monkeyandme.png"
						alt="Personal Photo"
					/>
				</a>
			</div>
			<div className="flex flex-col gap-2">
				<Typography variant="h2" className="mt-10">
					Contact
				</Typography>
				<a
					className="mb-10 underline-wavy font-londrina font-light text-2xl sm:text-4xl underline-offset-8"
					href="mailto:soreilly424@gmail.com"
				>
					soreilly424@gmail.com
				</a>

				<div className="flex flex-col gap-5 sm:flex-row">
					{socialLinks.map(({ name, href, Icon }) => (
						<a
							key={name}
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 font-londrina font-light uppercase hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-300"
						>
							{name}
							<Icon />
						</a>
					))}
				</div>
			</div>
		</div>
	)
}
