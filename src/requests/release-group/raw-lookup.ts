// IMPORTS
import { schemas } from '@shvmeless/schemas'
import { ApiClient } from '@lib/client'

// SCHEMA
const RawReleaseGroupLookupSchema = schemas.record(schemas.unknown())

// FUNCTION
export async function lookupRawReleaseGroup(mbid: string): Promise<Record<string, unknown>> {
  const response = await ApiClient.lookup('release-group', mbid)
  return RawReleaseGroupLookupSchema.validate(response)
}
