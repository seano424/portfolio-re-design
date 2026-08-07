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
			className="flex flex-col gap-6 leading-relaxed text-gray-900 lg:items-start dark:text-white"
		>
			<div className="flex flex-col gap-2">
				<Typography variant="h2">What I&apos;m doing now</Typography>
				<Typography variant="small" className="font-mono uppercase">
					Last updated: August 7, 2026 | Austin, TX
				</Typography>
			</div>

			<Typography variant="h5">Building</Typography>
			<p>
				Most of my time goes to LIFO, an expiry-tracking layer that sits
				on top of Square and tells retailers what&apos;s about to go bad
				while there&apos;s still time to discount or donate it. The
				interesting problem isn&apos;t the tracking. It&apos;s that
				nobody wants to do data entry. We shipped an OCR scanner,
				watched people abandon it, and replaced it with a Square catalog
				import that gets a merchant set up in minutes. Most of what
				I&apos;ve learned this year came from that reversal.
			</p>

			<Typography variant="h5">Shipping</Typography>
			<p>
				On the side there&apos;s VoyageAway, a travel platform for
				wildlife-rich trips that puts part of every subscription toward
				conservation. Species, destinations, and community sightings,
				with the iNaturalist API underneath for real observation data.
			</p>
			<p>
				I&apos;m building it solo, which a few years ago would have been
				an unreasonable thing to attempt. Working alongside Claude Code
				and Cursor is a genuinely different way to work than what I
				trained on, and I&apos;m still forming opinions about where it
				helps and where it quietly makes things worse.
			</p>

			<Typography variant="h5">Away from the screen</Typography>
			<p>
				Scuba diving, mostly, and hiking when there&apos;s no water
				nearby. VoyageAway started as a way to keep track of my own
				dives and sightings before it turned into something bigger. If
				you&apos;d like to collaborate, discuss an idea, or simply say
				hello, you can find me on{' '}
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
		</section>
	)
}
