// IMPORTS
import { schemas } from '@shvmeless/schemas'
import type { Release } from '@interfaces/entities'
import { ReleaseSchema } from '@schemas/entities'
import { ApiClient } from '@lib/client'

// INTERFACE
export interface ReleaseSearch {
  count: number
  releases: Array<Release>
}

// SCHEMA
const ReleaseSearchSchema = schemas.object<ReleaseSearch>({
  count: schemas.number(),
  releases: schemas.array(ReleaseSchema),
}).strip()

// FUNCTION
export async function searchRelease(query: string, max: number = 100): Promise<ReleaseSearch> {

  let count = 0
  const releases: Array<Release> = []

  do {

    const response = await ApiClient.search('release', query, Math.min(max, 100), releases.length)
    const data = ReleaseSearchSchema.validate(response)

    if (count === 0) count = data.count
    for (const release of data.releases) releases.push(release)

  } while (releases.length < Math.min(count, max))

  return { count, releases }

}
