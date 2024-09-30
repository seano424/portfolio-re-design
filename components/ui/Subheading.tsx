type SubheadingProps = {
	text: string
	className?: string
}

const Subheading = ({
	text = 'Sean O&apos;Reilly',
	className = 'text-blue-300 dark:text-white/80',
}: SubheadingProps) => {
	return (
		<p
			className={`font-mono text-sm uppercase tracking-widest ${className}`}
		>
			{text}
		</p>
	)
}

export default Subheading
