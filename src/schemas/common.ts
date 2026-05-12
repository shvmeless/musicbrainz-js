/* eslint @stylistic/quote-props: ["error", "always"] */

// IMPORTS
import { schemas } from '@shvmeless/schemas'
import type { Alias, Area, LifeSpan, Tag } from '@interfaces/common'
import { AliasTypeSchema, AreaTypeSchema } from '@schemas/enums'

// INTERFACE
export const LifeSpanSchema = schemas.object<LifeSpan>({
  'begin': schemas.string().optional(),
  'ended': schemas.boolean().nullable(),
  'end': schemas.string().optional(),
}).strip()

// INTERFACE
export const AreaSchema = schemas.object<Area>({
  'id': schemas.string(),
  'type': AreaTypeSchema.optional(),
  'type-id': schemas.string().optional(),
  'name': schemas.string(),
  'sort-name': schemas.string(),
  'life-span': LifeSpanSchema,
}).strip()

// INTERFACE
export const AliasSchema = schemas.object<Alias>({
  'sort-name': schemas.string(),
  'type-id': schemas.string().optional(),
  'name': schemas.string(),
  'locale': schemas.string().nullable(),
  'type': AliasTypeSchema.nullable(),
  'primary': schemas.boolean().nullable(),
  'begin-date': schemas.string().nullable(),
  'end-date': schemas.string().nullable(),
}).strip()

// INTERFACE
export const TagSchema = schemas.object<Tag>({
  'count': schemas.number(),
  'name': schemas.string(),
}).strip()
