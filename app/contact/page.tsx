import socialLinks from '@/lib/socialLinks'
import Image from 'next/image'

export default function ContactPage() {
	return (
		<div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center text-gray-800 md:flex-row md:gap-20 dark:text-gray-100">
			<div className="relative aspect-square h-[450px]">
				<a href="mailto:soreilly424@gmail.com">
					<Image
						fill
						className="cursor-hover rounded-4xl object-cover grayscale"
						src="/images/me.png"
						alt="Personal Photo"
					/>
				</a>
			</div>
			<div className="flex flex-col gap-2">
				<p className="mt-10 font-mono text-lg text-gray-900 uppercase dark:text-gray-100">
					Contact
				</p>
				<a
					className="mb-10 text-xl font-black underline underline-offset-8"
					href="mailto:soreilly424@gmail.com"
				>
					soreilly424@gmail.com
				</a>

				<div className="flex gap-5">
					{socialLinks.map(({ name, href, Icon }) => (
						<a
							key={name}
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 font-mono text-gray-900 uppercase hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-300"
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
