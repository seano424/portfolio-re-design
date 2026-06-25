'use client'

import { useEffect } from 'react'

const ConsoleGreeting = () => {
	useEffect(() => {
		console.log(
			"%c👋 Hey there! I'm Sean, a front-end developer who loves to build beautiful websites and apps ☃️",
			'color: #4F46E5; font-size: 16px; font-weight: bold;'
		)
		console.log(
			'%cFeel free to check out the code on GitHub: %chttps://github.com/seano424 🐸',
			'color: #1106e7; font-size: 14px;',
			'color: #10B981; font-size: 14px; font-weight: bold;'
		)
	}, [])

	return null
}

export default ConsoleGreeting
