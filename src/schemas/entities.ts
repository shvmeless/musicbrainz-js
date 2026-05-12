/* eslint @stylistic/quote-props: ["error", "always"] */

// IMPORTS
import { schemas } from '@shvmeless/schemas'
import type { Artist, Recording, Release, ReleaseGroup, Work } from '@interfaces/entities'
import { ArtistGenderSchema, ArtistTypeSchema, PrimaryTypeSchema, SecondaryTypeSchema, StatusSchema } from '@schemas/enums'
import { AliasSchema, AreaSchema, LabelInfoSchema, LifeSpanSchema, TagSchema, TextRepresentationSchema } from '@schemas/common'
import { ArtistCreditSchema, RecordingReleaseSchema, ReleaseEventSchema, ReleaseGroupSlimSchema, ReleaseMediaSchema, ReleaseSlimSchema, WorkRelationSchema } from '@schemas/secondary'

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

// INTERFACE
export const ReleaseGroupSchema = schemas.object<ReleaseGroup> ({
  'id': schemas.string(),
  'type-id': schemas.string().optional(),
  'score': schemas.number(),
  'primary-type-id': schemas.string().optional(),
  'artist-credit-id': schemas.string(),
  'count': schemas.number(),
  'title': schemas.string(),
  'first-release-date': schemas.string().optional(),
  'primary-type': PrimaryTypeSchema.optional(),
  'artist-credit': schemas.array(ArtistCreditSchema),
  'releases': schemas.array(ReleaseSlimSchema).optional(),
  'tags': schemas.array(TagSchema).optional(),
  'secondary-types': schemas.array(SecondaryTypeSchema).optional(),
  'secondary-type-ids': schemas.array(schemas.string()).optional(),
}).strip()

// INTERFACE
export const ReleaseSchema = schemas.object<Release> ({
  'id': schemas.string(),
  'score': schemas.number(),
  'status-id': schemas.string().optional(),
  'packaging-id': schemas.string().optional(),
  'artist-credit-id': schemas.string(),
  'count': schemas.number().optional(),
  'title': schemas.string(),
  'status': StatusSchema.optional(),
  'packaging': schemas.string().optional(),
  'text-representation': TextRepresentationSchema.optional(),
  'artist-credit': schemas.array(ArtistCreditSchema),
  'release-group': ReleaseGroupSlimSchema,
  'date': schemas.string().optional(),
  'country': schemas.string().optional(),
  'release-events': schemas.array(ReleaseEventSchema).optional(),
  'barcode': schemas.string().optional(),
  'label-info': schemas.array(LabelInfoSchema).optional(),
  'track-count': schemas.number().optional(),
  'media': schemas.array(ReleaseMediaSchema).optional(),
  'disambiguation': schemas.string().optional(),
  'asin': schemas.string().optional(),
  'tags': schemas.array(TagSchema).optional(),
}).strip()

// INTERFACE
export const RecordingSchema = schemas.object<Recording>({
  'id': schemas.string(),
  'score': schemas.number(),
  'artist-credit-id': schemas.string(),
  'title': schemas.string(),
  'length': schemas.number().optional(),
  'video': schemas.boolean().nullable(),
  'artist-credit': schemas.array(ArtistCreditSchema),
  'first-release-date': schemas.string().optional(),
  'releases': schemas.array(RecordingReleaseSchema).optional(),
  'isrcs': schemas.array(schemas.string()).optional(),
  'tags': schemas.array(TagSchema).optional(),
  'disambiguation': schemas.string().optional(),
}).strip()

// INTERFACE
export const WorkSchema = schemas.object<Work>({
  'id': schemas.string(),
  'type': schemas.string().optional(),
  'score': schemas.number(),
  'title': schemas.string(),
  'language': schemas.string().optional(),
  'iswcs': schemas.array(schemas.string()).optional(),
  'relations': schemas.array(WorkRelationSchema),
  'languages': schemas.array(schemas.string()),
  'aliases': schemas.array(AliasSchema).optional(),
  'disambiguation': schemas.string().optional(),
}).strip()
