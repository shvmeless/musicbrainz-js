// IMPORTS
import { schemas } from '@shvmeless/schemas'
import type { Recording } from '@interfaces/entities'
import { RecordingSchema } from '@schemas/entities'
import { ApiClient } from '@lib/client'

// INTERFACE
export interface RecordingSearch {
  count: number
  recordings: Array<Recording>
}

// SCHEMA
const RecordingSearchSchema = schemas.object<RecordingSearch>({
  count: schemas.number(),
  recordings: schemas.array(RecordingSchema),
}).strip()

// FUNCTION
export async function searchRecording(query: string, max: number = 100): Promise<RecordingSearch> {

  let count = 0
  const recordings: Array<Recording> = []

  do {

    const response = await ApiClient.search('recording', query, Math.min(max, 100), recordings.length)
    const data = RecordingSearchSchema.validate(response)

    if (count === 0) count = data.count
    for (const recording of data.recordings) recordings.push(recording)

  } while (recordings.length < Math.min(count, max))

  return { count, recordings }

}
