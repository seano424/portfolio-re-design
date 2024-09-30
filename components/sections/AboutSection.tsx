import Image from 'next/image'
import { Inter } from 'next/font/google'
import Subheading from '@/components/ui/Subheading'
const inter = Inter({ subsets: ['latin'] })
const AboutSection = () => {
	return (
		<section className={`${inter.className} container`}>
			<div className="flex flex-col-reverse gap-10 lg:mx-auto lg:grid lg:max-w-6xl lg:grid-cols-2 lg:gap-6">
				<div className="flex flex-col items-center justify-center gap-6 leading-relaxed text-gray-900 lg:items-start dark:text-white">
					<Subheading
						className="dark:text-blue-300"
						text="About Me / My Story"
					/>
					<p>
						Hey there! I'm Sean, a passionate front-end developer
						with a knack for React, JavaScript, and TypeScript. My
						mission? Turning user-focused designs into smooth,
						blazing-fast websites that just work.
					</p>
					<p>
						When it comes to coding, I'm all about creating
						intuitive designs with powerful functionality. I love
						diving deep into React (Next.js), and I'm equally
						comfortable crafting custom CSS/Sass solutions or
						whipping up rapid designs with Tailwind CSS. I really
						enjoy learning about accessibility and making sure
						everyone can use the websites I build. And I'm always
						trying to keep up with the latest tech trends, but I
						like to stay focused on what's important and have a
						strong foundation in the basics.
					</p>
					<p>
						I am a graduate of the University of Kansas, where I was
						a History Major and more recently a graduate of the Le
						Wagon Coding Bootcamp where we built full-stack apps
						with Ruby on Rails and JavaScript.
					</p>
					<p>
						Want to connect? You can find me on Instagram, Twitter
						(or X) or check out my latest projects on GitHub. Always
						happy to chat about code, diving, or the best sci-fi
						books you've never heard of!
					</p>
				</div>

				<div className="flex items-center justify-center">
					<div className="relative aspect-square h-[400px]">
						<Image
							fill
							className="rounded-2xl object-cover"
							src="/images/me.png"
							alt="Personal Photo"
							sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutSection
