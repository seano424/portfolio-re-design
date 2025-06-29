import './globals.css'

import clsx from 'clsx'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Header from '@/components/layout/Header'
import Cursor from '@/components/common/Cursor'
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
import { ViewTransitions } from 'next-view-transitions'
import { MobileMenuProvider } from '@/contexts/MobileMenuContext'
import MobileMenu from '@/components/mobile/MobileMenu'

const inter = Inter({ subsets: ['latin'] })
const DEV_MODE = process.env.DEV_MODE === 'true'

const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
})

export const metadata: Metadata = {
	title: "Sean O'Reilly | Frontend developer, designer",
	description: 'Frontend developer',
	alternates: {
		canonical: '/',
		languages: {
			'en-US': '/en-US',
			'es-ES': '/es-ES',
		},
	},
	icons: {
		icon: [{ url: '/favicon.ico', sizes: 'any' }],
		shortcut: '/favicon.ico',
		apple: '/favicon.ico',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ViewTransitions>
			<html lang="en" suppressHydrationWarning className="dark">
				<body
					cz-shortcut-listen="true"
					className={clsx(
						geistMono.variable,
						inter.className,
						'dark:bg-dark flex min-h-screen flex-col scroll-smooth bg-gray-50 antialiased',
						DEV_MODE && 'debug-screens'
					)}
				>
					<ThemeProvider attribute="class" defaultTheme="dark">
						<MobileMenuProvider>
							<MobileMenu />
							<Header />
							<Cursor />
							<main className="flex-1">{children}</main>
						</MobileMenuProvider>
					</ThemeProvider>
				</body>
			</html>
		</ViewTransitions>
	)
}
