// IMPORTS
import { schemas } from '@shvmeless/schemas'
import { ApiClient } from '@lib/client'

// INTERFACE
export interface RawWorkSearch {
  count: number
  works: Array<
    Record<string, unknown>
  >
}

// SCHEMA
const RawWorkSearchSchema = schemas.object<RawWorkSearch>({
  count: schemas.number(),
  works: schemas.array(
    schemas.record(schemas.unknown()),
  ),
}).strip()

// FUNCTION
export async function searchRawWork(query: string, max: number = 100): Promise<RawWorkSearch> {

  let count = 0
  const works: Array<Record<string, unknown>> = []

  do {

    const response = await ApiClient.search('work', query, Math.min(max, 100), works.length)
    const data = RawWorkSearchSchema.validate(response)

    if (count === 0) count = data.count
    for (const work of data.works) works.push(work)

  } while (works.length < Math.min(count, max))

  return { count, works }

}
