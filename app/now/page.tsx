import type { Metadata } from 'next'
import Typography from '@/components/ui/Typography'
import { Instagram } from '@/components/icons'

export const metadata: Metadata = {
	title: "Now | Sean O'Reilly",
	description: "What Sean O'Reilly is focused on right now.",
}

export default function Now() {
	return (
		<section
			id="now"
			className="flex flex-col gap-8 leading-relaxed text-gray-900 lg:items-start dark:text-white"
		>
			<div className="flex flex-col gap-2">
				<Typography variant="h2">What I&apos;m doing now</Typography>
				<Typography variant="small" className="font-mono uppercase">
					Last updated: August 7, 2026 | Austin, TX
				</Typography>
			</div>

			<div className="flex flex-col gap-2">
				<Typography variant="h5">Building</Typography>
				<p>
					Most of my time goes to LIFO, an expiry-tracking layer that
					sits on top of Square and tells retailers what&apos;s about
					to go bad while there&apos;s still time to discount or
					donate it. The interesting problem isn&apos;t the tracking.
					It&apos;s that nobody wants to do data entry. We shipped an
					OCR scanner, watched people abandon it, and replaced it with
					a Square catalog import that gets a merchant set up in
					minutes. Most of what I&apos;ve learned this year came from
					that reversal.
				</p>
			</div>

			<div className="flex flex-col gap-2">
				<Typography variant="h5">Shipping</Typography>
				<p>
					On the side there&apos;s VoyageAway, a living map of the
					natural world. It connects wildlife, the places they live,
					the ways to see them, and the organizations protecting
					them. Start with an animal and it shows you where it lives,
					when to go, and who&apos;s working to keep it wild.
					It&apos;s built on Next.js and Supabase with iNaturalist
					data underneath, plus community sightings on top.
				</p>
			</div>

			<div className="flex flex-col gap-2">
				<Typography variant="h5">Away from the screen</Typography>
				<p>
					I&apos;m usually outside exploring somewhere new. Since
					moving to Austin, I&apos;ve been discovering the trails and
					parks around Texas and planning the next adventure.
					VoyageAway started as a personal project to combine my
					interest in wildlife with my love of building things.
					It&apos;s still a work in progress, but it&apos;s been one
					of my favorite projects to build. If you&apos;d like to
					collaborate, discuss an idea, or simply say hello, you can
					find me on{' '}
					<a
						className="underline-wavy inline-flex items-center gap-1"
						href="https://www.instagram.com/sea.oreilly/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Instagram <Instagram className="h-4 w-4" />
					</a>{' '}
					or send me an{' '}
					<a
						className="underline-wavy"
						href="mailto:soreilly424@gmail.com"
					>
						email
					</a>
					.
				</p>
			</div>
		</section>
	)
}
