import socialLinks from '@/lib/socialLinks'

const SocialLinks = () => {
	return (
		<div className="flex items-center gap-8">
			{socialLinks.map(({ name, className, href, Icon }) => (
				<a
					rel="noopener noreferrer"
					target="_blank"
					key={name}
					href={href}
					className={`${className} flex items-center justify-center gap-2 text-lg transition-colors duration-200`}
				>
					<Icon className="h-8 w-8" />
					{name}
				</a>
			))}
		</div>
	)
}

export default SocialLinks
