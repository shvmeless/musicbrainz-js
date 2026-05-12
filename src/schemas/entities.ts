/* eslint @stylistic/quote-props: ["error", "always"] */

// IMPORTS
import { schemas } from '@shvmeless/schemas'
import type { Artist, Recording, Release, ReleaseGroup, Work } from '@interfaces/entities'
import { ArtistGenderSchema, ArtistTypeSchema, PrimaryTypeSchema, SecondaryTypeSchema, StatusSchema } from '@schemas/enums'
import { AliasSchema, AreaSchema, LabelInfoSchema, LifeSpanSchema, TagSchema, TextRepresentationSchema } from '@schemas/common'
import { ArtistCreditSchema, RecordingReleaseSchema, ReleaseEventSchema, ReleaseGroupSlimSchema, ReleaseMediaSchema, ReleaseSlimSchema, WorkRelationSchema } from '@schemas/secondary'

// INTERFACE
export const ArtistSchema = schemas.object<Artist>({
  'id': schemas.string(),
  'type': ArtistTypeSchema.nullable().optional(),
  'type-id': schemas.string().nullable().optional(),
  'score': schemas.number(),
  'gender-id': schemas.string().nullable().optional(),
  'name': schemas.string(),
  'sort-name': schemas.string(),
  'gender': ArtistGenderSchema.nullable().optional(),
  'country': schemas.string().nullable().optional(),
  'area': AreaSchema.nullable().optional(),
  'begin-area': AreaSchema.nullable().optional(),
  'ipis': schemas.array(schemas.string()).nullable().optional(),
  'isnis': schemas.array(schemas.string()).nullable().optional(),
  'life-span': LifeSpanSchema,
  'aliases': schemas.array(AliasSchema).nullable().optional(),
  'tags': schemas.array(TagSchema).nullable().optional(),
  'end-area': AreaSchema.nullable().optional(),
  'disambiguation': schemas.string().nullable().optional(),
}).strip()

// INTERFACE
export const ReleaseGroupSchema = schemas.object<ReleaseGroup>({
  'id': schemas.string(),
  'type-id': schemas.string().nullable().optional(),
  'score': schemas.number(),
  'primary-type-id': schemas.string().nullable().optional(),
  'artist-credit-id': schemas.string(),
  'count': schemas.number(),
  'title': schemas.string(),
  'first-release-date': schemas.string().nullable().optional(),
  'primary-type': PrimaryTypeSchema.nullable().optional(),
  'artist-credit': schemas.array(ArtistCreditSchema),
  'releases': schemas.array(ReleaseSlimSchema).nullable().optional(),
  'tags': schemas.array(TagSchema).nullable().optional(),
  'secondary-types': schemas.array(SecondaryTypeSchema).nullable().optional(),
  'secondary-type-ids': schemas.array(schemas.string()).nullable().optional(),
}).strip()

// INTERFACE
export const ReleaseSchema = schemas.object<Release>({
  'id': schemas.string(),
  'score': schemas.number(),
  'status-id': schemas.string().nullable().optional(),
  'packaging-id': schemas.string().nullable().optional(),
  'artist-credit-id': schemas.string(),
  'count': schemas.number().nullable().optional(),
  'title': schemas.string(),
  'status': StatusSchema.nullable().optional(),
  'packaging': schemas.string().nullable().optional(),
  'text-representation': TextRepresentationSchema.nullable().optional(),
  'artist-credit': schemas.array(ArtistCreditSchema),
  'release-group': ReleaseGroupSlimSchema,
  'date': schemas.string().nullable().optional(),
  'country': schemas.string().nullable().optional(),
  'release-events': schemas.array(ReleaseEventSchema).nullable().optional(),
  'barcode': schemas.string().nullable().optional(),
  'label-info': schemas.array(LabelInfoSchema).nullable().optional(),
  'track-count': schemas.number().nullable().optional(),
  'media': schemas.array(ReleaseMediaSchema).nullable().optional(),
  'disambiguation': schemas.string().nullable().optional(),
  'asin': schemas.string().nullable().optional(),
  'tags': schemas.array(TagSchema).nullable().optional(),
}).strip()

// INTERFACE
export const RecordingSchema = schemas.object<Recording>({
  'id': schemas.string(),
  'score': schemas.number(),
  'artist-credit-id': schemas.string(),
  'title': schemas.string(),
  'length': schemas.number().nullable().optional(),
  'video': schemas.boolean().nullable().optional(),
  'artist-credit': schemas.array(ArtistCreditSchema),
  'first-release-date': schemas.string().nullable().optional(),
  'releases': schemas.array(RecordingReleaseSchema).nullable().optional(),
  'isrcs': schemas.array(schemas.string()).nullable().optional(),
  'tags': schemas.array(TagSchema).nullable().optional(),
  'disambiguation': schemas.string().nullable().optional(),
}).strip()

// INTERFACE
export const WorkSchema = schemas.object<Work>({
  'id': schemas.string(),
  'type': schemas.string().nullable().optional(),
  'score': schemas.number(),
  'title': schemas.string(),
  'language': schemas.string().nullable().optional(),
  'iswcs': schemas.array(schemas.string()).nullable().optional(),
  'relations': schemas.array(WorkRelationSchema),
  'languages': schemas.array(schemas.string()),
  'aliases': schemas.array(AliasSchema).nullable().optional(),
  'disambiguation': schemas.string().nullable().optional(),
}).strip()
