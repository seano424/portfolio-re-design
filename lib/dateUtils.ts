/**
 * Formats a date range string with duration calculation
 * @param startDate - Start date in YYYY-MM-DD format
 * @param endDate - Optional end date in YYYY-MM-DD format (defaults to present)
 * @returns Formatted string like "October 2024 - Present (1 month)" or "January 2023 - March 2024 (1 year 2 months)"
 */
export function formatDateRange(startDate: string, endDate?: string): string {
	const start = new Date(startDate)
	const end = endDate ? new Date(endDate) : new Date()

	// Format start month/year
	const startFormatted = start.toLocaleDateString('en-US', {
		month: 'long',
		year: 'numeric',
	})

	// Format end month/year or "Present"
	const endFormatted = endDate
		? end.toLocaleDateString('en-US', {
				month: 'long',
				year: 'numeric',
		  })
		: 'Present'

	// Calculate duration
	const duration = calculateDuration(start, end)

	return `${startFormatted} - ${endFormatted} (${duration})`
}

/**
 * Formats just the duration from a start date to present (or end date)
 * @param startDate - Start date in YYYY-MM-DD format
 * @param endDate - Optional end date in YYYY-MM-DD format (defaults to present)
 * @returns Duration string like "1 year 2 months" or "6 months"
 */
export function formatDuration(startDate: string, endDate?: string): string {
	const start = new Date(startDate)
	const end = endDate ? new Date(endDate) : new Date()
	return calculateDuration(start, end)
}

/**
 * Calculates duration between two dates in years and months
 * @param start - Start date
 * @param end - End date
 * @returns Duration string like "1 year 2 months" or "6 months"
 */
function calculateDuration(start: Date, end: Date): string {
	let years = end.getFullYear() - start.getFullYear()
	let months = end.getMonth() - start.getMonth()

	// Adjust for negative months
	if (months < 0) {
		years--
		months += 12
	}

	const parts: string[] = []

	if (years > 0) {
		parts.push(`${years} year${years > 1 ? 's' : ''}`)
	}

	if (months > 0) {
		parts.push(`${months} month${months > 1 ? 's' : ''}`)
	}

	// Handle edge case where start and end are the same month
	if (parts.length === 0) {
		return '1 month'
	}

	return parts.join(' ')
}
