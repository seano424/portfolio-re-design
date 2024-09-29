'use client'

import React, { useState, useEffect } from 'react'
import Cursor from '@/components/common/Cursor'

export default function CursorController() {
	const [isCursorEnabled, setIsCursorEnabled] = useState(true)

	useEffect(() => {
		// Load preference from local storage on component mount
		const storedPreference = localStorage.getItem('customCursorEnabled')
		setIsCursorEnabled(storedPreference !== 'false')
	}, [])

	const toggleCursor = () => {
		const newState = !isCursorEnabled
		setIsCursorEnabled(newState)
		localStorage.setItem('customCursorEnabled', newState.toString())
	}

	return (
		<>
			<Cursor enabled={isCursorEnabled} />
			<button
				onClick={toggleCursor}
				className="fixed bottom-4 left-4 z-50 rounded bg-gray-200 p-2 dark:bg-gray-800"
				aria-label={
					isCursorEnabled
						? 'Disable custom cursor'
						: 'Enable custom cursor'
				}
			>
				{isCursorEnabled ? 'Disable' : 'Enable'} Custom Cursor
			</button>
		</>
	)
}
