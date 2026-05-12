/* eslint @stylistic/quote-props: ["error", "always"] */

// IMPORTS
import { schemas } from '@shvmeless/schemas'
import type { ArtistCredit, ArtistSlim, ReleaseSlim } from '@interfaces/secondary'
import { StatusSchema } from '@schemas/enums'
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
