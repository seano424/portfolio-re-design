import './globals.css'

import clsx from 'clsx'
import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Cursor from '@/components/common/Cursor'
import { ThemeProvider } from 'next-themes'
import { Inter, Londrina_Solid, Roboto_Mono } from 'next/font/google'
import { ViewTransitions } from 'next-view-transitions'
import { MobileMenuProvider } from '@/contexts/MobileMenuContext'
import MobileMenu from '@/components/mobile/MobileMenu'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const londrina = Londrina_Solid({
	subsets: ['latin'],
	weight: ['100', '300', '400', '900'],
	variable: '--font-londrina',
})
const robotoMono = Roboto_Mono({
	subsets: ['latin'],
	variable: '--font-roboto-mono',
})
const DEV_MODE = process.env.DEV_MODE === 'true'

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
						inter.variable,
						londrina.variable,
						robotoMono.variable,
						'dark:bg-dark font-inter flex min-h-screen flex-col scroll-smooth bg-white antialiased',
						DEV_MODE && 'debug-screens'
					)}
				>
					<ThemeProvider attribute="class" defaultTheme="dark">
						<MobileMenuProvider>
							<MobileMenu />
							<Header />
							<Cursor />
							<main className="container lg:mx-auto lg:max-w-2xl pb-20 flex-1 pt-32">
								{children}
							</main>
							<Footer />
						</MobileMenuProvider>
					</ThemeProvider>
				</body>
			</html>
		</ViewTransitions>
	)
}
