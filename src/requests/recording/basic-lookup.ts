// IMPORTS
import type { Recording } from '@interfaces/entities'
import { RecordingSchema } from '@schemas/entities'
import { ApiClient } from '@lib/client'

// FUNCTION
export async function lookupRecording(mbid: string): Promise<Recording> {
  const response = await ApiClient.lookup('recording', mbid)
  return RecordingSchema.validate(response)
}
