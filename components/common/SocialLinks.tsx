import { socialLinks } from '@/lib/socialLinks'

const SocialLinks = () => {
	return (
		<div className="flex items-center gap-8">
			{socialLinks.map(({ name, className, href, Icon }) => (
				<a
					rel="noopener noreferrer"
					target="_blank"
					key={name}
					href={href}
					className={`${className} flex items-center justify-center gap-2 text-xl transition-colors ease-linear`}
				>
					<Icon className="h-6 w-6" />
					{name}
				</a>
			))}
		</div>
	)
}

export default SocialLinks
