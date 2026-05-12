/* eslint @stylistic/quote-props: ["error", "always"] */

// IMPORTS
import { schemas } from '@shvmeless/schemas'
import type { Alias, Area, Label, LabelInfo, LifeSpan, Tag, TextRepresentation } from '@interfaces/common'
import { AreaTypeSchema } from '@schemas/enums'

// INTERFACE
export const LifeSpanSchema = schemas.object<LifeSpan>({
  'begin': schemas.string().nullable().optional().default(null),
  'ended': schemas.boolean().nullable().optional().default(null),
  'end': schemas.string().nullable().optional().default(null),
}).strip()

// INTERFACE
export const AreaSchema = schemas.object<Area>({
  'id': schemas.string(),
  'type': AreaTypeSchema.nullable().optional().default(null),
  'type-id': schemas.string().nullable().optional().default(null),
  'name': schemas.string(),
  'sort-name': schemas.string(),
  'life-span': LifeSpanSchema.nullable().optional().default(null),
}).strip()

// INTERFACE
export const AliasSchema = schemas.object<Alias>({
  'sort-name': schemas.string(),
  'type-id': schemas.string().nullable().optional().default(null),
  'name': schemas.string(),
  'locale': schemas.string().nullable().optional().default(null),
  'type': schemas.string().nullable().optional().default(null),
  'primary': schemas.boolean().nullable().optional().default(null),
  'begin-date': schemas.string().nullable().optional().default(null),
  'end-date': schemas.string().nullable().optional().default(null),
}).strip()

// INTERFACE
export const TagSchema = schemas.object<Tag>({
  'count': schemas.number(),
  'name': schemas.string(),
}).strip()

// INTERFACE
export const TextRepresentationSchema = schemas.object<TextRepresentation>({
  'language': schemas.string().nullable().optional().default(null),
  'script': schemas.string().nullable().optional().default(null),
}).strip()

// INTERFACE
export const LabelSchema = schemas.object<Label>({
  'id': schemas.string(),
  'name': schemas.string(),
}).strip()

// INTERFACE
export const LabelInfoSchema = schemas.object<LabelInfo>({
  'label': LabelSchema.nullable().optional().default(null),
  'catalog-number': schemas.string().nullable().optional().default(null),
}).strip()
