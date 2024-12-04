import { type SchemaTypeDefinition } from 'sanity'
import { project } from './project'
import { post } from './post'
import { code } from './code'

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [project, post, code],
}
