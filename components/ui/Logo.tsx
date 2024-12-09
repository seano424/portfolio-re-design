import Image from 'next/image'

export default function Logo() {
	return (
		<div className="relative h-10 w-40">
			<Image
				fill
				sizes="160px"
				className="object-cover object-center dark:hidden"
				src="/logos/light-2.png"
				alt="Sean O'Reilly"
				priority
			/>
			<Image
				fill
				sizes="160px"
				className="hidden object-cover object-center dark:block"
				src="/logos/dark-2.png"
				alt="Sean O'Reilly"
				priority
			/>
		</div>
	)
}
