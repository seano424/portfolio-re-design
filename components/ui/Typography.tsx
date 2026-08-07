import { ReactNode } from 'react'

type TypographyVariant =
	'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'small'

type TypographyProps = {
	variant?: TypographyVariant
	children: ReactNode
	className?: string
	as?: TypographyVariant
}

const variantStyles: Record<TypographyVariant, string> = {
	h1: 'text-4xl font-black sm:text-6xl lg:text-7xl font-londrina',
	h2: 'text-3xl font-black md:text-4xl font-londrina',
	h3: 'text-2xl font-semibold md:text-3xl font-londrina',
	h4: 'text-xl font-semibold md:text-2xl font-londrina',
	h5: 'text-lg font-medium md:text-xl font-londrina',
	h6: 'text-base font-medium md:text-lg font-londrina',
	p: 'text-base font-inter',
	span: 'text-base',
	small: 'text-sm font-mono',
}

const Typography = ({
	variant = 'p',
	children,
	className = '',
	as,
}: TypographyProps) => {
	const Component = as || variant
	const baseStyles = variantStyles[variant]
	const combinedClassName = `${baseStyles} ${className}`.trim()

	return <Component className={combinedClassName}>{children}</Component>
}

export default Typography
