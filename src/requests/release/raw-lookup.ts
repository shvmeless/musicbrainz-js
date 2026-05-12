// IMPORTS
import { schemas } from '@shvmeless/schemas'
import { ApiClient } from '@lib/client'

// SCHEMA
const RawReleaseLookupSchema = schemas.record(schemas.unknown())

// FUNCTION
export async function lookupRawRelease(mbid: string): Promise<Record<string, unknown>> {
  const response = await ApiClient.lookup('release', mbid)
  return RawReleaseLookupSchema.validate(response)
}
