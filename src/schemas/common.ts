/* eslint @stylistic/quote-props: ["error", "always"] */

// IMPORTS
import { schemas } from '@shvmeless/schemas'
import type { Alias, Area, Label, LabelInfo, LifeSpan, Tag, TextRepresentation } from '@interfaces/common'
import { AliasTypeSchema, AreaTypeSchema } from '@schemas/enums'

// INTERFACE
export const LifeSpanSchema = schemas.object<LifeSpan>({
  'begin': schemas.string().nullable().optional(),
  'ended': schemas.boolean().nullable().optional(),
  'end': schemas.string().nullable().optional(),
}).strip()

// INTERFACE
export const AreaSchema = schemas.object<Area>({
  'id': schemas.string(),
  'type': AreaTypeSchema.nullable().optional(),
  'type-id': schemas.string().nullable().optional(),
  'name': schemas.string(),
  'sort-name': schemas.string(),
  'life-span': LifeSpanSchema,
}).strip()

// INTERFACE
export const AliasSchema = schemas.object<Alias>({
  'sort-name': schemas.string(),
  'type-id': schemas.string().nullable().optional(),
  'name': schemas.string(),
  'locale': schemas.string().nullable().optional(),
  'type': AliasTypeSchema.nullable().optional(),
  'primary': schemas.boolean().nullable().optional(),
  'begin-date': schemas.string().nullable().optional(),
  'end-date': schemas.string().nullable().optional(),
}).strip()

// INTERFACE
export const TagSchema = schemas.object<Tag>({
  'count': schemas.number(),
  'name': schemas.string(),
}).strip()

// INTERFACE
export const TextRepresentationSchema = schemas.object<TextRepresentation>({
  'language': schemas.string().nullable().optional(),
  'script': schemas.string().nullable().optional(),
}).strip()

// INTERFACE
export const LabelSchema = schemas.object<Label>({
  'id': schemas.string(),
  'name': schemas.string(),
}).strip()

// INTERFACE
export const LabelInfoSchema = schemas.object<LabelInfo>({
  'label': LabelSchema.nullable().optional(),
  'catalog-number': schemas.string().nullable().optional(),
}).strip()
