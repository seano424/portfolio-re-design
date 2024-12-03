export const project = {
	name: 'project',
	title: 'Projects',
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
			name: 'featuredImage',
			title: 'Feature Image',
			type: 'image',
			options: {
				hotspot: true, // Enables UI for selecting what areas of an image should be cropped
			},
		},
		{
			name: 'images',
			title: 'Project Images',
			type: 'array',
			of: [
				{
					type: 'image',
					options: {
						hotspot: true,
					},
				},
			],
		},
		{
			name: 'liveUrl',
			title: 'Live URL',
			type: 'url',
		},
		{
			name: 'githubUrl',
			title: 'GitHub URL',
			type: 'url',
		},
		{
			name: 'description',
			title: 'Description',
			type: 'array',
			of: [
				{
					type: 'block', // This is the rich text editor
				},
			],
		},
	],
}
