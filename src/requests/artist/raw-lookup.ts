// IMPORTS
import { schemas } from '@shvmeless/schemas'
import { ApiClient } from '@lib/client'

// SCHEMA
const RawArtistLookupSchema = schemas.record(schemas.unknown())

// FUNCTION
export async function lookupRawArtist(mbid: string): Promise<Record<string, unknown>> {
  const response = await ApiClient.lookup('artist', mbid)
  return RawArtistLookupSchema.validate(response)
}
