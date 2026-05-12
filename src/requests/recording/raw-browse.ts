// IMPORTS
import { schemas } from '@shvmeless/schemas'
import type { Entity } from '@interfaces/common'
import { ApiClient } from '@lib/client'

// INTERFACE
export interface RawRecordingBrowse {
  'recording-count': number
  'recordings': Array<
    Record<string, unknown>
  >
}

// SCHEMA
const RawRecordingBrowseSchema = schemas.object<RawRecordingBrowse>({
  'recording-count': schemas.number(),
  'recordings': schemas.array(
    schemas.record(schemas.unknown()),
  ),
}).strip()

// FUNCTION
export async function browseRawRecording(link: Entity, mbid: string, max: number = 25): Promise<RawRecordingBrowse> {

  let count = 0
  const recordings: Array<Record<string, unknown>> = []

  do {

    const response = await ApiClient.browse('recording', link, mbid, Math.min(max, 25), recordings.length)
    const data = RawRecordingBrowseSchema.validate(response)

    if (count === 0) count = data['recording-count']
    for (const recording of data.recordings) recordings.push(recording)

  } while (recordings.length < Math.min(count, max))

  return { 'recording-count': count, 'recordings': recordings }

}
