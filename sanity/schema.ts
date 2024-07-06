import { type SchemaTypeDefinition } from 'sanity'
import cards from './schemas/cards'
import form from './schemas/form'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cards,form],
}
