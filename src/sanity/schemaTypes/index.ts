import { type SchemaTypeDefinition } from 'sanity'
import {landingPage} from './landingPage-section/landingPage'
import {hero} from './landingPage-section/hero'
import {card} from './landingPage-section/card'
import { comment } from './comments/comment'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    landingPage,
    hero,
    card,
    comment,

  ],
}
