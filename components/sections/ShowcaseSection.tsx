import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

const ShowcaseSection = () => {
	return (
		<section
			id="showcase"
			className="container flex min-h-[500px] items-center justify-center rounded-2xl border-8 bg-fuchsia-700"
		>
			<h1 className={`${inter.className} text-8xl font-black`}>
				Showcase
			</h1>
		</section>
	)
}

export default ShowcaseSection
