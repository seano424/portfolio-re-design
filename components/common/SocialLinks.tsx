import { socialLinks } from '@/lib/socialLinks'

const SocialLinks = () => {
	return (
		<div className="flex flex-wrap items-center gap-4 lg:gap-8">
			{socialLinks.map(({ name, className, href, Icon }) => (
				<a
					rel="noopener noreferrer"
					target="_blank"
					key={name}
					href={href}
					className={`${className} flex items-center justify-center gap-2 text-sm font-black transition-colors ease-linear sm:text-xl`}
				>
					<Icon className="h-4 w-4 sm:h-5 sm:w-5" />
					{name}
				</a>
			))}
		</div>
	)
}

export default SocialLinks
