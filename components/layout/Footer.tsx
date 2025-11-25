import { socialLinks } from '@/lib/socialLinks'

export default function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="border-t border-gray-100 px-8 py-6 md:px-16 md:py-12 lg:px-20 dark:border-gray-800">
			<div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
				<div className="order-2 text-xs text-gray-400 md:order-1 md:text-sm dark:text-gray-500">
					Sean O&apos;Reilly © {currentYear}
				</div>
				<div className="order-1 flex items-center gap-4 md:order-2">
					{socialLinks.map(({ name, href, Icon, className }) => (
						<a
							key={name}
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className={`${className} transition-colors`}
							aria-label={name}
						>
							<Icon className="h-5 w-5" />
						</a>
					))}
				</div>
			</div>
		</footer>
	)
}
