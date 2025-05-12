'use client'

import navLinks from '@/lib/navLinks'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence } from 'framer-motion'
import NavLink from '@/components/layout/NavLink'
import { useMobileMenu } from '@/contexts/MobileMenuContext'

export default function MobileMenu() {
	const { isOpen, setIsOpen } = useMobileMenu()

	const pathname = usePathname()

	useEffect(() => {
		setIsOpen(false)
	}, [pathname, setIsOpen])

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					key="mobile-menu"
					className="fixed top-20 right-3 bottom-3 left-3 z-50 flex flex-col items-center justify-center gap-1 rounded-3xl border-8 bg-gray-50/30 px-10 py-4 text-nowrap shadow-lg filter backdrop-blur-sm dark:bg-gray-900/10"
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7 }}
					exit={{ opacity: 0, x: 20 }}
				>
					<NavLink id="home" name="Home" onClick={() => setIsOpen(false)} />
					{navLinks.map(({ name, href, id }, index) => (
						<NavLink key={index} id={id} name={name} href={href} onClick={() => setIsOpen(false)} />
					))}
					<NavLink id="hire-me" name="Resume" href="/hire-me" onClick={() => setIsOpen(false)} />
					{/* <Link
						href="/hire-me"
						className="bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-md bg-linear-to-r from-blue-500 via-purple-500 to-purple-500 px-4 py-2 font-mono font-bold text-white uppercase transition-all duration-500 ease-linear"
					>
						Resume
					</Link> */}
				</motion.div>
			)}
		</AnimatePresence>
	)
}
