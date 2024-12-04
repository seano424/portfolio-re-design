export const code = {
	name: 'code',
	title: 'Code',
	type: 'object',
	fields: [
		{
			name: 'filename',
			title: 'Filename',
			type: 'string',
		},
		{
			name: 'language',
			title: 'Language',
			type: 'string',
			options: {
				list: [
					{ title: 'JavaScript', value: 'javascript' },
					{ title: 'TypeScript', value: 'typescript' },
					{ title: 'HTML', value: 'html' },
					{ title: 'CSS', value: 'css' },
					{ title: 'Python', value: 'python' },
					{ title: 'Bash', value: 'bash' },
					{ title: 'JSON', value: 'json' },
				],
			},
		},
		{
			name: 'code',
			title: 'Code',
			type: 'text',
			rows: 10,
		},
	],
}
