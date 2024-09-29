import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Header from '@/components/layout/Header'
import dynamic from 'next/dynamic'

const DynamicCursor = dynamic(() => import('@/components/common/Cursor'), {
	ssr: false,
})

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 400 500 600 700 800 900',
})
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
})

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} debug-screens flex min-h-screen flex-col scroll-smooth bg-gray-50 antialiased dark:bg-gray-900`}
			>
				<Header />
				<DynamicCursor />
				<main className="flex-1 pt-20">{children}</main>
			</body>
		</html>
	)
}
