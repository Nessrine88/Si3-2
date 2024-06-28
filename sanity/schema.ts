import { type SchemaTypeDefinition } from 'sanity'
import cards from './schemas/cards'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cards],
}
