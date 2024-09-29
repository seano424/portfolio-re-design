import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const AboutSection = () => {
	return (
		<section
			className={`${inter.className} container grid gap-12 pt-12 md:grid-cols-2`}
		>
			<div className="flex flex-col gap-6 leading-relaxed text-gray-900 dark:text-white">
				<p>My story</p>
				<p>
					Hey there! I'm Sean, a passionate front-end developer with a
					knack for React, JavaScript, and TypeScript. My mission?
					Turning user-focused designs into smooth, blazing-fast
					websites that just work.
				</p>
				{/* <p>
					I've been on quite a journey lately. After working with some
					amazing teams and clients, I decided to take a year off and
					chase a dream - becoming a scuba diving instructor in
					Indonesia. Yeah, I know, quite a change from coding! But
					that's me - always up for an adventure.
				</p> */}
				{/* <p>
					Speaking of adventures, I'm originally from Kansas City, but
					I've had the chance to live all over the world. Spain,
					Mexico, you name it.
				</p> */}
				<p>
					When it comes to coding, I'm all about creating intuitive
					designs with powerful functionality. I love diving deep into
					React (Next.js), and I'm equally comfortable crafting custom
					CSS/Sass solutions or whipping up rapid designs with
					Tailwind CSS. I really enjoy learning about accessibility
					and making sure everyone can use the websites I build. And
					I'm always trying to keep up with the latest tech trends,
					but I like to stay focused on what's important and have a
					strong foundation in the basics.
				</p>
				<p>
					I am a graduate of the University of Kansas, where I was a
					History Major and more recently a graduate of the Le Wagon
					Coding Bootcamp where we built full-stack apps with Ruby on
					Rails and JavaScript.
				</p>
				{/* <p>
					My background? It's a bit of a mixed bag. I graduated from
					the University of Kansas with a History degree (yeah, I
					know, not your typical dev background; I actually was a
					teacher for a few years). But then I fell in love with
					coding and graduated from Le Wagon Coding Bootcamp, where we
					built full-stack apps with Ruby on Rails and JavaScript.
				</p> */}
				{/* <p>
					When I'm not working, you'll probably find me spending time
					with friends and family, and if I'm lucky - underwater, out
					on a hike, or watching my favorite football team (Go Chiefs!
					😅) or if I'm fortunate, on vacation hitting the slopes
					haha.
				</p> */}
				<p>
					Want to connect? You can find me on Instagram, Twitter (or
					X) or check out my latest projects on GitHub. Always happy
					to chat about code, diving, or the best sci-fi books you've
					never heard of!
				</p>
			</div>

			<div className="relative aspect-square">
				<Image
					fill
					className="object-cover"
					src="/images/me.png"
					alt="Personal Photo"
					sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
				/>
			</div>
		</section>
	)
}

export default AboutSection
