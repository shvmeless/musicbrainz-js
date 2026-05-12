/* eslint @stylistic/quote-props: ["error", "always"] */

// IMPORTS
import { schemas } from '@shvmeless/schemas'
import type { Artist, Recording, Release, ReleaseGroup, Work } from '@interfaces/entities'
import { ArtistTypeSchema, PrimaryTypeSchema, SecondaryTypeSchema, StatusSchema } from '@schemas/enums'
import { AliasSchema, AreaSchema, LabelInfoSchema, LifeSpanSchema, TagSchema, TextRepresentationSchema } from '@schemas/common'
import { ArtistCreditSchema, RecordingReleaseSchema, ReleaseEventSchema, ReleaseGroupSlimSchema, ReleaseMediaSchema, ReleaseSlimSchema, WorkRelationSchema } from '@schemas/secondary'

// INTERFACE
export const ArtistSchema = schemas.object<Artist>({
  'id': schemas.string(),
  'type': ArtistTypeSchema.nullable().optional().default(null),
  'type-id': schemas.string().nullable().optional().default(null),
  'score': schemas.number().nullable().optional().default(null),
  'gender-id': schemas.string().nullable().optional().default(null),
  'name': schemas.string(),
  'sort-name': schemas.string(),
  'gender': schemas.string().nullable().optional().default(null),
  'country': schemas.string().nullable().optional().default(null),
  'area': AreaSchema.nullable().optional().default(null),
  'begin-area': AreaSchema.nullable().optional().default(null),
  'ipis': schemas.array(schemas.string()).nullable().default([]).optional().default([]),
  'isnis': schemas.array(schemas.string()).nullable().default([]).optional().default([]),
  'life-span': LifeSpanSchema,
  'aliases': schemas.array(AliasSchema).nullable().default([]).optional().default([]),
  'tags': schemas.array(TagSchema).nullable().default([]).optional().default([]),
  'end-area': AreaSchema.nullable().optional().default(null),
  'disambiguation': schemas.string().nullable().optional().default(null),
}).strip()

// INTERFACE
export const ReleaseGroupSchema = schemas.object<ReleaseGroup>({
  'id': schemas.string(),
  'type-id': schemas.string().nullable().optional().default(null),
  'score': schemas.number().nullable().optional().default(null),
  'primary-type-id': schemas.string().nullable().optional().default(null),
  'artist-credit-id': schemas.string().nullable().optional().default(null),
  'count': schemas.number().nullable().optional().default(null),
  'title': schemas.string(),
  'first-release-date': schemas.string().nullable().optional().default(null),
  'primary-type': PrimaryTypeSchema.nullable().optional().default(null),
  'artist-credit': schemas.array(ArtistCreditSchema).nullable().default([]).optional().default([]),
  'releases': schemas.array(ReleaseSlimSchema).nullable().default([]).optional().default([]),
  'tags': schemas.array(TagSchema).nullable().default([]).optional().default([]),
  'secondary-types': schemas.array(SecondaryTypeSchema).nullable().default([]).optional().default([]),
  'secondary-type-ids': schemas.array(schemas.string()).nullable().default([]).optional().default([]),
}).strip()

// INTERFACE
export const ReleaseSchema = schemas.object<Release>({
  'id': schemas.string(),
  'score': schemas.number().nullable().optional().default(null),
  'status-id': schemas.string().nullable().optional().default(null),
  'packaging-id': schemas.string().nullable().optional().default(null),
  'artist-credit-id': schemas.string().nullable().optional().default(null),
  'count': schemas.number().nullable().optional().default(null),
  'title': schemas.string(),
  'status': StatusSchema.nullable().optional().default(null),
  'packaging': schemas.string().nullable().optional().default(null),
  'text-representation': TextRepresentationSchema.nullable().optional().default(null),
  'artist-credit': schemas.array(ArtistCreditSchema).nullable().default([]).optional().default([]),
  'release-group': ReleaseGroupSlimSchema.nullable().optional().default(null),
  'date': schemas.string().nullable().optional().default(null),
  'country': schemas.string().nullable().optional().default(null),
  'release-events': schemas.array(ReleaseEventSchema).nullable().default([]).optional().default([]),
  'barcode': schemas.string().nullable().optional().default(null),
  'label-info': schemas.array(LabelInfoSchema).nullable().default([]).optional().default([]),
  'track-count': schemas.number().nullable().optional().default(null),
  'media': schemas.array(ReleaseMediaSchema).nullable().default([]).optional().default([]),
  'disambiguation': schemas.string().nullable().optional().default(null),
  'asin': schemas.string().nullable().optional().default(null),
  'tags': schemas.array(TagSchema).nullable().default([]).optional().default([]),
}).strip()

// INTERFACE
export const RecordingSchema = schemas.object<Recording>({
  'id': schemas.string(),
  'score': schemas.number().nullable().optional().default(null),
  'artist-credit-id': schemas.string().nullable().optional().default(null),
  'title': schemas.string(),
  'length': schemas.number().nullable().optional().default(null),
  'video': schemas.boolean().nullable().optional().default(null),
  'artist-credit': schemas.array(ArtistCreditSchema).nullable().default([]).optional().default([]),
  'first-release-date': schemas.string().nullable().optional().default(null),
  'releases': schemas.array(RecordingReleaseSchema).nullable().default([]).optional().default([]),
  'isrcs': schemas.array(schemas.string()).nullable().default([]).optional().default([]),
  'tags': schemas.array(TagSchema).nullable().default([]).optional().default([]),
  'disambiguation': schemas.string().nullable().optional().default(null),
}).strip()

// INTERFACE
export const WorkSchema = schemas.object<Work>({
  'id': schemas.string(),
  'type': schemas.string().nullable().optional().default(null),
  'score': schemas.number().nullable().optional().default(null),
  'title': schemas.string(),
  'language': schemas.string().nullable().optional().default(null),
  'iswcs': schemas.array(schemas.string()).nullable().default([]).optional().default([]),
  'relations': schemas.array(WorkRelationSchema).nullable().default([]).optional().default([]),
  'languages': schemas.array(schemas.string()),
  'aliases': schemas.array(AliasSchema).nullable().default([]).optional().default([]),
  'disambiguation': schemas.string().nullable().optional().default(null),
}).strip()
