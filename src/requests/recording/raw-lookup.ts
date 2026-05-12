// IMPORTS
import { schemas } from '@shvmeless/schemas'
import { ApiClient } from '@lib/client'

// SCHEMA
const RawRecordingLookupSchema = schemas.record(schemas.unknown())

// FUNCTION
export async function lookupRawRecording(mbid: string): Promise<Record<string, unknown>> {
  const response = await ApiClient.lookup('recording', mbid)
  return RawRecordingLookupSchema.validate(response)
}
