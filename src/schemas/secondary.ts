/* eslint @stylistic/quote-props: ["error", "always"] */

// IMPORTS
import { schemas } from '@shvmeless/schemas'
import type { ArtistCredit, ArtistSlim, ReleaseEvent, ReleaseGroupSlim, ReleaseMedia, ReleaseSlim } from '@interfaces/secondary'
import { PrimaryTypeSchema, SecondaryTypeSchema, StatusSchema } from '@schemas/enums'
import { AliasSchema } from '@schemas/common'

// INTERFACE
export const ArtistSlimSchema = schemas.object<ArtistSlim> ({
  'id': schemas.string(),
  'name': schemas.string(),
  'sort-name': schemas.string(),
  'aliases': schemas.array(AliasSchema).optional(),
  'disambiguation': schemas.string().optional(),
}).strip()

// INTERFACE
export const ReleaseGroupSlimSchema = schemas.object<ReleaseGroupSlim> ({
  'id': schemas.string(),
  'type-id': schemas.string().optional(),
  'primary-type-id': schemas.string().optional(),
  'title': schemas.string(),
  'primary-type': PrimaryTypeSchema.optional(),
  'secondary-types': schemas.array(SecondaryTypeSchema).optional(),
  'secondary-type-ids': schemas.array(schemas.string()).optional(),
}).strip()

// INTERFACE
export const ReleaseSlimSchema = schemas.object<ReleaseSlim> ({
  'id': schemas.string(),
  'status-id': schemas.string().optional(),
  'title': schemas.string(),
  'status': StatusSchema.optional(),
}).strip()

// INTERFACE
export const ArtistCreditSchema = schemas.object<ArtistCredit> ({
  'joinphrase': schemas.string().optional(),
  'name': schemas.string(),
  'artist': ArtistSlimSchema,
}).strip()

// INTERFACE
export const ReleaseEventSchema = schemas.object<ReleaseEvent> ({
  'date': schemas.string(),
  'area': ArtistSlimSchema,
}).strip()

// INTERFACE
export const ReleaseMediaSchema = schemas.object<ReleaseMedia> ({
  'id': schemas.string(),
  'format': schemas.string().optional(),
  'disc-count': schemas.number(),
  'track-count': schemas.number(),
}).strip()
