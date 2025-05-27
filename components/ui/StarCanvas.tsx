'use client'

import { useEffect, useRef } from 'react'

// Interface for meteor objects
interface Meteor {
	x: number
	y: number
	length: number
	angle: number
	speed: number
	thickness: number
	opacity: number
	trail: { x: number; y: number }[]
	active: boolean
	tailFadeSpeed: number
	colorStart: string
	colorMiddle: string
	colorEnd: string
}

const StarCanvas = ({ visible }: { visible: boolean }) => {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		if (!visible || !canvasRef.current) return

		const canvas = canvasRef.current
		const ctx = canvas.getContext('2d')
		if (!ctx) return

		// Size canvas to match parent
		const resize = () => {
			canvas.width = canvas.offsetWidth
			canvas.height = canvas.offsetHeight
		}

		resize()
		window.addEventListener('resize', resize)

		// Create stars with state information
		const stars = Array.from({ length: 200 }, () => ({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			radius: Math.random() * 1.5 + 0.5,
			baseOpacity: Math.random() * 0.8 + 0.2,
			speed: Math.random() * 0.03 + 0.005,
			state: 'normal', // 'normal', 'morphing', 'twinkling', 'reverting'
			morphProgress: 0, // 0 to 1 transition progress
			twinkleSpeed: Math.random() * 0.01 + 0.005,
			twinklePhase: Math.random() * Math.PI * 2,
			armLength: Math.random() * 12 + 15,
			glowRadius: Math.random() * 10 + 15,
			twinkleDuration: Math.random() * 8 + 4,
			morphDuration: Math.random() * 1 + 0.8, // Faster morphing
			timeInState: 0,
			twinkleChance: Math.random() * 0.0002 + 0.00005,
		}))

		// Create meteors array
		const meteors: Meteor[] = []

		// Meteor creation function
		const createMeteor = () => {
			// Determine start position - either from top or sides
			const startFromTop = Math.random() > 0.3

			// Random angle between 30 and 60 degrees (in radians)
			// For meteors coming from top
			let angle = startFromTop
				? (Math.random() * 30 + 30) *
					(Math.PI / 180) *
					(Math.random() > 0.5 ? 1 : -1)
				: (Math.random() * 20 + 50) *
					(Math.PI / 180) *
					(Math.random() > 0.5 ? 1 : -1)

			// Start position
			let x = startFromTop
				? Math.random() * canvas.width
				: angle > 0
					? -50
					: canvas.width + 50
			let y = startFromTop ? -50 : Math.random() * (canvas.height / 2)

			// Random color scheme (different color sequences for different meteors)
			const colorSchemes = [
				{
					start: 'rgba(0, 255, 100, 0.7)',
					middle: 'rgba(200, 255, 255, 0.8)',
					end: 'rgba(255, 255, 255, 0.9)',
				},
				{
					start: 'rgba(100, 100, 255, 0.7)',
					middle: 'rgba(200, 200, 255, 0.8)',
					end: 'rgba(255, 255, 255, 0.9)',
				},
				{
					start: 'rgba(255, 100, 100, 0.7)',
					middle: 'rgba(255, 200, 100, 0.8)',
					end: 'rgba(255, 255, 255, 0.9)',
				},
				{
					start: 'rgba(255, 255, 100, 0.7)',
					middle: 'rgba(255, 255, 200, 0.8)',
					end: 'rgba(255, 255, 255, 0.9)',
				},
			]

			const colorScheme =
				colorSchemes[Math.floor(Math.random() * colorSchemes.length)]

			// Create the meteor object
			const meteor: Meteor = {
				x,
				y,
				length: Math.random() * 100 + 200, // Length of the meteor trail
				angle,
				speed: Math.random() * 3 + 6,
				thickness: Math.random() * 3 + 1,
				opacity: Math.random() * 0.3 + 0.7,
				trail: [], // Will store previous positions for trail effect
				active: true,
				tailFadeSpeed: Math.random() * 0.05 + 0.01,
				colorStart: colorScheme.start,
				colorMiddle: colorScheme.middle,
				colorEnd: colorScheme.end,
			}

			meteors.push(meteor)
		}

		// Animation loop
		let animationFrame: number
		let time = 0
		let activeTwinkleCount = 0
		const MAX_TWINKLE_STARS = 3
		let lastMeteorTime = 0

		// Rotation angle in radians (12 degrees)
		const rotationAngle = (12 * Math.PI) / 180

		const animate = () => {
			time += 0.005
			ctx.clearRect(0, 0, canvas.width, canvas.height)
			ctx.fillStyle = '#020111'
			ctx.fillRect(0, 0, canvas.width, canvas.height)

			// Update active twinkle count
			activeTwinkleCount = stars.filter(
				(star) =>
					star.state === 'morphing' ||
					star.state === 'twinkling' ||
					star.state === 'reverting'
			).length

			// Draw and update stars
			stars.forEach((star) => {
				star.timeInState += 0.004 // Faster state transitions

				// Update star state
				if (
					star.state === 'normal' &&
					Math.random() < star.twinkleChance &&
					activeTwinkleCount < MAX_TWINKLE_STARS
				) {
					star.state = 'morphing'
					star.timeInState = 0
				} else if (
					star.state === 'morphing' &&
					star.timeInState >= star.morphDuration
				) {
					star.state = 'twinkling'
					star.timeInState = 0
				} else if (
					star.state === 'twinkling' &&
					star.timeInState >= star.twinkleDuration
				) {
					star.state = 'reverting'
					star.timeInState = 0
				} else if (
					star.state === 'reverting' &&
					star.timeInState >= star.morphDuration
				) {
					star.state = 'normal'
					star.timeInState = 0
					star.twinkleChance = Math.random() * 0.0002 + 0.00005
				}

				// Calculate morph progress
				if (star.state === 'morphing') {
					star.morphProgress = star.timeInState / star.morphDuration
				} else if (star.state === 'reverting') {
					star.morphProgress =
						1 - star.timeInState / star.morphDuration
				} else if (star.state === 'twinkling') {
					star.morphProgress = 1
				} else {
					star.morphProgress = 0
				}

				// Draw star based on state
				if (star.state === 'normal' || star.morphProgress < 0.2) {
					// Draw normal star
					ctx.beginPath()
					ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
					ctx.fillStyle = `rgba(255, 255, 255, ${star.baseOpacity})`
					ctx.fill()
				} else {
					// Draw twinkling effects based on morph progress
					const twinkleAmount =
						0.7 +
						0.3 *
							Math.sin(
								time * star.twinkleSpeed + star.twinklePhase
							)
					const effectiveProgress =
						star.morphProgress *
						(star.state === 'twinkling' ? twinkleAmount : 1)
					const currentOpacity =
						star.baseOpacity + 0.2 * effectiveProgress

					// Draw normal star with reduced opacity during transition
					if (star.morphProgress < 0.7) {
						ctx.beginPath()
						ctx.arc(
							star.x,
							star.y,
							star.radius * (1 - star.morphProgress * 0.7),
							0,
							Math.PI * 2
						)
						ctx.fillStyle = `rgba(255, 255, 255, ${star.baseOpacity * (1 - star.morphProgress * 0.7)})`
						ctx.fill()
					}

					// Draw the glow effect (big blur behind the star)
					const glow = ctx.createRadialGradient(
						star.x,
						star.y,
						0,
						star.x,
						star.y,
						star.glowRadius * effectiveProgress
					)
					glow.addColorStop(
						0,
						`rgba(135, 206, 250, ${0.4 * effectiveProgress})`
					)
					glow.addColorStop(
						0.5,
						`rgba(135, 206, 250, ${0.2 * effectiveProgress})`
					)
					glow.addColorStop(1, 'rgba(135, 206, 250, 0)')

					ctx.beginPath()
					ctx.arc(
						star.x,
						star.y,
						star.glowRadius * effectiveProgress,
						0,
						Math.PI * 2
					)
					ctx.fillStyle = glow
					ctx.fill()

					// Draw rotated cross arms (X shape)
					if (effectiveProgress > 0.3) {
						const armOpacity =
							currentOpacity *
							0.8 *
							((effectiveProgress - 0.3) / 0.7)
						const armLength =
							star.armLength * effectiveProgress * 0.8

						// Save the current context state
						ctx.save()

						// Translate to the star's position
						ctx.translate(star.x, star.y)

						// Rotate the context by the rotation angle
						ctx.rotate(rotationAngle)

						// First arm pair (now rotated)
						ctx.beginPath()
						ctx.moveTo(-armLength, 0)
						ctx.lineTo(armLength, 0)
						ctx.strokeStyle = `rgba(173, 216, 230, ${armOpacity})`
						ctx.lineWidth = 1 * effectiveProgress
						ctx.stroke()

						// Second arm pair (now rotated)
						ctx.beginPath()
						ctx.moveTo(0, -armLength)
						ctx.lineTo(0, armLength)
						ctx.strokeStyle = `rgba(173, 216, 230, ${armOpacity})`
						ctx.lineWidth = 1 * effectiveProgress
						ctx.stroke()

						// Restore the context to its original state
						ctx.restore()
					}

					// Draw the bright center
					const coreSize = 3 * effectiveProgress
					ctx.beginPath()
					ctx.arc(star.x, star.y, coreSize, 0, Math.PI * 2)
					ctx.fillStyle = `rgba(135, 206, 250, ${currentOpacity * effectiveProgress})`
					ctx.fill()

					// Draw the smaller, brighter core
					ctx.beginPath()
					ctx.arc(star.x, star.y, coreSize * 0.6, 0, Math.PI * 2)
					ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * effectiveProgress * 1.2})`
					ctx.fill()
				}

				// Move star
				star.y += star.speed

				// Reset if off screen
				if (star.y > canvas.height) {
					star.y = 0
					star.x = Math.random() * canvas.width
					star.state = 'normal'
					star.morphProgress = 0
					star.timeInState = 0
					star.twinklePhase = Math.random() * Math.PI * 2
				}
			})

			// Occasionally create new meteors (roughly every 5-10 seconds)
			if (time - lastMeteorTime > Math.random() * 1 + 5) {
				createMeteor()
				lastMeteorTime = time
			}

			// Update and draw meteors
			for (let i = 0; i < meteors.length; i++) {
				const meteor = meteors[i]

				if (meteor.active) {
					// Move the meteor
					const moveX = Math.cos(meteor.angle) * meteor.speed
					const moveY = Math.sin(meteor.angle) * meteor.speed
					meteor.x += moveX
					meteor.y += moveY

					// Store positions for trail effect (limit to prevent memory issues)
					meteor.trail.unshift({ x: meteor.x, y: meteor.y })
					if (meteor.trail.length > 20) meteor.trail.pop()

					// Draw meteor head (brightest part)
					ctx.beginPath()
					ctx.arc(
						meteor.x,
						meteor.y,
						meteor.thickness * 1.5,
						0,
						Math.PI * 2
					)
					ctx.fillStyle = meteor.colorEnd
					ctx.fill()

					// Draw meteor trail
					if (meteor.trail.length > 1) {
						// Create gradient for the trail
						const gradient = ctx.createLinearGradient(
							meteor.x,
							meteor.y,
							meteor.trail[meteor.trail.length - 1].x,
							meteor.trail[meteor.trail.length - 1].y
						)

						gradient.addColorStop(0, meteor.colorEnd)
						gradient.addColorStop(0.4, meteor.colorMiddle)
						gradient.addColorStop(1, meteor.colorStart)

						ctx.beginPath()
						ctx.moveTo(meteor.x, meteor.y)

						// Draw the trail with varying opacity based on position
						for (let j = 0; j < meteor.trail.length; j++) {
							const point = meteor.trail[j]
							const normalizedPos = j / meteor.trail.length

							// Draw a line to each point with decreasing thickness
							ctx.lineTo(point.x, point.y)
						}

						ctx.strokeStyle = gradient
						ctx.lineWidth = meteor.thickness * 2
						ctx.lineCap = 'round'
						ctx.stroke()

						// Add a gentle glow around the meteor
						ctx.beginPath()
						ctx.moveTo(meteor.x, meteor.y)
						for (let j = 0; j < meteor.trail.length; j++) {
							const point = meteor.trail[j]
							ctx.lineTo(point.x, point.y)
						}

						ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)'
						ctx.lineWidth = meteor.thickness * 3
						ctx.lineCap = 'round'
						ctx.stroke()
					}

					// Check if meteor has left the canvas or faded out
					if (
						meteor.x < -100 ||
						meteor.x > canvas.width + 100 ||
						meteor.y < -100 ||
						meteor.y > canvas.height + 100
					) {
						meteor.active = false
					}
				}
			}

			// Remove inactive meteors
			for (let i = meteors.length - 1; i >= 0; i--) {
				if (!meteors[i].active) {
					meteors.splice(i, 1)
				}
			}

			animationFrame = requestAnimationFrame(animate)
		}

		animate()

		return () => {
			cancelAnimationFrame(animationFrame)
			window.removeEventListener('resize', resize)
		}
	}, [visible])

	if (!visible) return null

	return (
		<canvas
			ref={canvasRef}
			className="absolute inset-0 -z-10 hidden h-full w-full dark:block"
		/>
	)
}

export default StarCanvas
