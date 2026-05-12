/* eslint @stylistic/quote-props: ["error", "always"] */

// IMPORTS
import { schemas } from '@shvmeless/schemas'
import type { ArtistCredit, ArtistSlim, RecordingRelease, RecordingReleaseGroup, RecordingReleaseMedia, ReleaseEvent, ReleaseGroupSlim, ReleaseMedia, ReleaseSlim, Track, WorkRecording, WorkRelation } from '@interfaces/secondary'
import { PrimaryTypeSchema, SecondaryTypeSchema, StatusSchema } from '@schemas/enums'
import { AliasSchema } from '@schemas/common'

// INTERFACE
export const ArtistSlimSchema = schemas.object<ArtistSlim>({
  'id': schemas.string(),
  'name': schemas.string(),
  'sort-name': schemas.string(),
  'aliases': schemas.array(AliasSchema).nullable().default([]).optional().default([]),
  'disambiguation': schemas.string().nullable().optional().default(null),
}).strip()

// INTERFACE
export const ReleaseGroupSlimSchema = schemas.object<ReleaseGroupSlim>({
  'id': schemas.string(),
  'type-id': schemas.string().nullable().optional().default(null),
  'primary-type-id': schemas.string().nullable().optional().default(null),
  'title': schemas.string(),
  'primary-type': PrimaryTypeSchema.nullable().optional().default(null),
  'secondary-types': schemas.array(SecondaryTypeSchema).nullable().default([]).optional().default([]),
  'secondary-type-ids': schemas.array(schemas.string()).nullable().default([]).optional().default([]),
}).strip()

// INTERFACE
export const ReleaseSlimSchema = schemas.object<ReleaseSlim>({
  'id': schemas.string(),
  'status-id': schemas.string().nullable().optional().default(null),
  'title': schemas.string(),
  'status': StatusSchema.nullable().optional().default(null),
}).strip()

// INTERFACE
export const ArtistCreditSchema = schemas.object<ArtistCredit>({
  'joinphrase': schemas.string().nullable().optional().default(null),
  'name': schemas.string(),
  'artist': ArtistSlimSchema,
}).strip()

// INTERFACE
export const ReleaseEventSchema = schemas.object<ReleaseEvent>({
  'date': schemas.string(),
  'area': ArtistSlimSchema.nullable().optional().default(null),
}).strip()

// INTERFACE
export const ReleaseMediaSchema = schemas.object<ReleaseMedia>({
  'id': schemas.string(),
  'format': schemas.string().nullable().optional().default(null),
  'disc-count': schemas.number(),
  'track-count': schemas.number(),
}).strip()

// INTERFACE
export const TrackSchema = schemas.object<Track>({
  'id': schemas.string(),
  'number': schemas.string(),
  'title': schemas.string(),
  'length': schemas.number().nullable().optional().default(null),
}).strip()

// INTERFACE
export const RecordingReleaseMediaSchema = schemas.object<RecordingReleaseMedia>({
  'id': schemas.string(),
  'position': schemas.number(),
  'format': schemas.string().nullable().optional().default(null),
  'track': schemas.array(TrackSchema),
  'track-count': schemas.number(),
  'track-offset': schemas.number(),
}).strip()

// INTERFACE
export const RecordingReleaseGroupSchema = schemas.object<RecordingReleaseGroup>({
  'id': schemas.string(),
  'type-id': schemas.string().nullable().optional().default(null),
  'primary-type-id': schemas.string().nullable().optional().default(null),
  'title': schemas.string(),
  'primary-type': PrimaryTypeSchema.nullable().optional().default(null),
  'secondary-types': schemas.array(SecondaryTypeSchema).nullable().default([]).optional().default([]),
  'secondary-type-ids': schemas.array(schemas.string()).nullable().default([]).optional().default([]),
  'disambiguation': schemas.string().nullable().optional().default(null),
}).strip()

// INTERFACE
export const RecordingReleaseSchema = schemas.object<RecordingRelease>({
  'id': schemas.string(),
  'status-id': schemas.string().nullable().optional().default(null),
  'count': schemas.number(),
  'title': schemas.string(),
  'status': StatusSchema.nullable().optional().default(null),
  'release-group': RecordingReleaseGroupSchema,
  'date': schemas.string().nullable().optional().default(null),
  'country': schemas.string().nullable().optional().default(null),
  'release-events': schemas.array(ReleaseEventSchema).nullable().default([]).optional().default([]),
  'track-count': schemas.number(),
  'media': schemas.array(RecordingReleaseMediaSchema),
  'artist-credit-id': schemas.string().nullable().optional().default(null),
  'artist-credit': schemas.array(ArtistCreditSchema).nullable().default([]).optional().default([]),
  'disambiguation': schemas.string().nullable().optional().default(null),
}).strip()

// INTERFACE
export const WorkRecordingSchema = schemas.object<WorkRecording>({
  'id': schemas.string(),
  'title': schemas.string(),
  'video': schemas.boolean().nullable().optional().default(null),
}).strip()

// INTERFACE
export const WorkRelationSchema = schemas.object<WorkRelation>({
  'type': schemas.string(),
  'type-id': schemas.string(),
  'direction': schemas.string(),
  'artist': ArtistSlimSchema.nullable().optional().default(null),
  'recording': WorkRecordingSchema.nullable().optional().default(null),
}).strip()
