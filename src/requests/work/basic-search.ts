// IMPORTS
import { schemas } from '@shvmeless/schemas'
import type { Work } from '@interfaces/entities'
import { WorkSchema } from '@schemas/entities'
import { ApiClient } from '@lib/client'

// INTERFACE
export interface WorkSearch {
  count: number
  works: Array<Work>
}

// SCHEMA
const WorkSearchSchema = schemas.object<WorkSearch>({
  count: schemas.number(),
  works: schemas.array(WorkSchema),
}).strip()

// FUNCTION
export async function searchWork(query: string, max: number = 100): Promise<WorkSearch> {

  let count = 0
  const works: Array<Work> = []

  do {

    const response = await ApiClient.search('work', query, Math.min(max, 100), works.length)
    const data = WorkSearchSchema.validate(response)

    if (count === 0) count = data.count
    for (const work of data.works) works.push(work)

  } while (works.length < Math.min(count, max))

  return { count, works }

}
