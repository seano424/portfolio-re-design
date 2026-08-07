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
		<div className="flex flex-col gap-4 py-8">
			{workExperiences.map((workExperience) => (
				<div
					key={`${workExperience.company}-${workExperience.role}`}
					className="flex gap-4"
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
							className="flex items-center gap-1 font-light"
						>
							{workExperience.company}
						</Typography>
						<div className="flex flex-col gap-2">
							<div className="flex flex-col gap-1">
								<Typography
									variant="h4"
									className="!font-light"
								>
									{workExperience.role}
								</Typography>
								<Typography variant="p">
									{workExperience.date} •{' '}
									{workExperience.location}
								</Typography>
								{/* <Typography variant="p">
									{workExperience.duration}
								</Typography> */}
							</div>
							{Array.isArray(workExperience.description) ? (
								<ul className="space-y-1.5">
									{workExperience.description.map(
										(item, index) => (
											<li
												key={index}
												className="flex items-start gap-2"
											>
												<span className="text-blue-700">
													•
												</span>
												{item}
											</li>
										)
									)}
								</ul>
							) : (
								<Typography variant="p">
									{workExperience.description}
								</Typography>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
