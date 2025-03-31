'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type MobileMenuContextType = {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
	toggleMenu: () => void
}

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(
	undefined
)

export function MobileMenuProvider({ children }: { children: ReactNode }) {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => setIsOpen(!isOpen)

	return (
		<MobileMenuContext.Provider value={{ isOpen, setIsOpen, toggleMenu }}>
			{children}
		</MobileMenuContext.Provider>
	)
}

export function useMobileMenu() {
	const context = useContext(MobileMenuContext)
	if (context === undefined) {
		throw new Error(
			'useMobileMenu must be used within a MobileMenuProvider'
		)
	}
	return context
}
