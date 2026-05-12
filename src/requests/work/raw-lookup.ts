// IMPORTS
import { schemas } from '@shvmeless/schemas'
import { ApiClient } from '@lib/client'

// SCHEMA
const RawWorkLookupSchema = schemas.record(schemas.unknown())

// FUNCTION
export async function lookupRawWork(mbid: string): Promise<Record<string, unknown>> {
  const response = await ApiClient.lookup('work', mbid)
  return RawWorkLookupSchema.validate(response)
}
