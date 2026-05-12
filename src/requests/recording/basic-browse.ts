// IMPORTS
import { schemas } from '@shvmeless/schemas'
import type { Entity } from '@interfaces/common'
import type { Recording } from '@interfaces/entities'
import { RecordingSchema } from '@schemas/entities'
import { ApiClient } from '@lib/client'

// INTERFACE
export interface RecordingBrowse {
  'recording-count': number
  'recordings': Array<Recording>
}

// SCHEMA
const RecordingBrowseSchema = schemas.object<RecordingBrowse>({
  'recording-count': schemas.number(),
  'recordings': schemas.array(RecordingSchema),
}).strip()

// FUNCTION
export async function browseRecording(link: Entity, mbid: string, max: number = 25): Promise<RecordingBrowse> {

  let count = 0
  const recordings: Array<Recording> = []

  do {

    const response = await ApiClient.browse('recording', link, mbid, Math.min(max, 25), recordings.length)
    const data = RecordingBrowseSchema.validate(response)

    if (count === 0) count = data['recording-count']
    for (const recording of data.recordings) recordings.push(recording)

  } while (recordings.length < Math.min(count, max))

  return { 'recording-count': count, 'recordings': recordings }

}
