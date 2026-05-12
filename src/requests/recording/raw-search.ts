// IMPORTS
import { schemas } from '@shvmeless/schemas'
import { ApiClient } from '@lib/client'

// INTERFACE
export interface RawRecordingSearch {
  count: number
  recordings: Array<
    Record<string, unknown>
  >
}

// SCHEMA
const RawRecordingSearchSchema = schemas.object<RawRecordingSearch>({
  count: schemas.number(),
  recordings: schemas.array(
    schemas.record(schemas.unknown()),
  ),
}).strip()

// FUNCTION
export async function searchRawRecording(query: string, max: number = 100): Promise<RawRecordingSearch> {

  let count = 0
  const recordings: Array<Record<string, unknown>> = []

  do {

    const response = await ApiClient.search('recording', query, Math.min(max, 100), recordings.length)
    const data = RawRecordingSearchSchema.validate(response)

    if (count === 0) count = data.count
    for (const recording of data.recordings) recordings.push(recording)

  } while (recordings.length < Math.min(count, max))

  return { count, recordings }

}
