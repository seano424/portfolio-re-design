export const post = {
	name: 'post',
	title: 'Blog Posts',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: 'publishedAt',
			title: 'Published at',
			type: 'datetime',
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: 'featuredImage',
			title: 'Featured Image',
			type: 'image',
			options: {
				hotspot: true,
			},
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: 'excerpt',
			title: 'Excerpt',
			type: 'text',
			rows: 3,
			validation: (Rule: any) => Rule.required().min(10).max(300),
		},
		{
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [
				{
					type: 'block',
					// Styles let you specify what blocks can be marked up as
					styles: [
						{ title: 'Normal', value: 'normal' },
						{ title: 'H1', value: 'h1' },
						{ title: 'H2', value: 'h2' },
						{ title: 'H3', value: 'h3' },
						{ title: 'Quote', value: 'blockquote' },
					],
					// Marks let you mark up inline text
					marks: {
						decorators: [
							{ title: 'Strong', value: 'strong' },
							{ title: 'Emphasis', value: 'em' },
							{ title: 'Code', value: 'code' },
						],
						annotations: [
							{
								title: 'URL',
								name: 'link',
								type: 'object',
								fields: [
									{
										title: 'URL',
										name: 'href',
										type: 'url',
									},
								],
							},
						],
					},
				},
				// You can add additional content types here
				{
					type: 'image',
					options: {
						hotspot: true,
					},
				},
				{
					type: 'code',
				},
			],
		},
	],
}
