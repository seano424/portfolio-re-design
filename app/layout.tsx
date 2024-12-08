import './globals.css'

import clsx from 'clsx'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Header from '@/components/layout/Header'
import Cursor from '@/components/common/Cursor'
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
import { ViewTransitions } from 'next-view-transitions'

const inter = Inter({ subsets: ['latin'] })

const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
})

export const metadata: Metadata = {
	title: "Sean O'Reilly | Frontend developer, designer",
	description: 'Frontend developer, optimist, and designer',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ViewTransitions>
			<html lang="en" suppressHydrationWarning>
				<body
					cz-shortcut-listen="true"
					className={clsx(
						geistMono.variable,
						inter.className,
						'debug-screens flex min-h-screen flex-col scroll-smooth bg-gray-50 antialiased dark:bg-gray-900'
					)}
				>
					<ThemeProvider attribute="class" defaultTheme="dark">
						<Header />
						<Cursor />
						<main className="flex-1 py-20">{children}</main>
					</ThemeProvider>
				</body>
			</html>
		</ViewTransitions>
	)
}
