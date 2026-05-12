/* eslint @stylistic/quote-props: ["error", "always"] */

// IMPORTS
import { schemas } from '@shvmeless/schemas'
import type { Artist } from '@interfaces/entities'
import { ArtistGenderSchema, ArtistTypeSchema } from '@schemas/enums'
import { AliasSchema, AreaSchema, LifeSpanSchema, TagSchema } from '@schemas/common'

// INTERFACE
export const ArtistSchema = schemas.object<Artist> ({
  'id': schemas.string(),
  'type': ArtistTypeSchema.optional(),
  'type-id': schemas.string().optional(),
  'score': schemas.number(),
  'gender-id': schemas.string().optional(),
  'name': schemas.string(),
  'sort-name': schemas.string(),
  'gender': ArtistGenderSchema.optional(),
  'country': schemas.string().optional(),
  'area': AreaSchema.optional(),
  'begin-area': AreaSchema.optional(),
  'ipis': schemas.array(schemas.string()).optional(),
  'isnis': schemas.array(schemas.string()).optional(),
  'life-span': LifeSpanSchema,
  'aliases': schemas.array(AliasSchema).optional(),
  'tags': schemas.array(TagSchema).optional(),
  'end-area': AreaSchema.optional(),
  'disambiguation': schemas.string().optional(),
}).strip()
