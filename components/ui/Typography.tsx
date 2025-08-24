import { ReactNode } from 'react'

type TypographyVariant =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'p'
	| 'span'
	| 'small'

type TypographyProps = {
	variant?: TypographyVariant
	children: ReactNode
	className?: string
	as?: TypographyVariant
}

const variantStyles: Record<TypographyVariant, string> = {
	h1: 'text-4xl font-black sm:text-6xl',
	h2: 'text-3xl font-bold md:text-4xl',
	h3: 'text-2xl font-semibold md:text-3xl',
	h4: 'text-xl font-semibold md:text-2xl',
	h5: 'text-lg font-medium md:text-xl',
	h6: 'text-base font-medium md:text-lg',
	p: 'text-lg sm:text-xl',
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
