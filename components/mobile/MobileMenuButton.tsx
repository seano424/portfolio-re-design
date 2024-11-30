'use client'

import { useState, useRef } from 'react'
import useOutsideClick from '@/hooks/useOutsideClick'

export default function MobileMenuButton() {
	const [isOpen, setIsOpen] = useState(false)
	const menuRef = useRef<HTMLDivElement>(null)

	useOutsideClick(menuRef, () => setIsOpen(false))

	return <div>MobileMenuButton</div>
}
