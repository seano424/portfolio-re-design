import Typography from './Typography'
import Image from 'next/image'

interface WorkExperience {
	company: string
	role: string
	location: string
	date: string
	duration: string
	description: string | string[]
	imageUrl?: string
}

interface WorkExperienceProps {
	workExperiences: WorkExperience[]
}

export default function WorkExperience({
	workExperiences,
}: WorkExperienceProps) {
	return (
		<div className="flex flex-col divide-y divide-gray-200">
			{workExperiences.map((workExperience) => (
				<div
					key={`${workExperience.company}-${workExperience.role}`}
					className="flex gap-4 py-8"
				>
					{workExperience.imageUrl && (
						<div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-xl p-2">
							<Image
								src={workExperience.imageUrl}
								alt={workExperience.company}
								fill
								sizes="100px"
								className="object-contain"
							/>
						</div>
					)}
					<div className="flex flex-col gap-2">
						<Typography
							variant="h4"
							className="flex items-center gap-1 font-mono"
						>
							{workExperience.company}
						</Typography>
						<div className="flex flex-col gap-2">
							<div className="flex flex-col gap-1">
								<h3 className="mb-0.5 flex items-center gap-1 font-medium text-gray-900 md:mb-1 md:text-base dark:text-white">
									{workExperience.role}
								</h3>
								<p className="text-xs tracking-wide text-gray-500 md:text-sm dark:text-gray-400">
									{workExperience.date} •{' '}
									{workExperience.location}
								</p>
								<p className="text-xs tracking-wide text-gray-400 md:text-sm dark:text-gray-100">
									{workExperience.duration}
								</p>
							</div>
							{Array.isArray(workExperience.description) ? (
								<ul className="space-y-1.5">
									{workExperience.description.map(
										(item, index) => (
											<li
												key={index}
												className="flex items-start gap-2 text-[14px] leading-relaxed text-gray-600 md:text-[15px] dark:text-gray-400"
											>
												<span className="mt-[7px] h-[3px] w-[3px] flex-shrink-0 rounded-full bg-gray-400"></span>
												<span>{item}</span>
											</li>
										)
									)}
								</ul>
							) : (
								<p className="text-[15px] leading-relaxed text-gray-600 md:text-base dark:text-gray-100">
									{workExperience.description}
								</p>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
