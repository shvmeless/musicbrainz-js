// IMPORTS
import { schemas } from '@shvmeless/schemas'
import { ApiClient } from '@lib/client'

// INTERFACE
export interface RawReleaseSearch {
  count: number
  releases: Array<
    Record<string, unknown>
  >
}

// SCHEMA
const RawReleaseSearchSchema = schemas.object<RawReleaseSearch>({
  count: schemas.number(),
  releases: schemas.array(
    schemas.record(schemas.unknown()),
  ),
}).strip()

// FUNCTION
export async function searchRawRelease(query: string, max: number = 100): Promise<RawReleaseSearch> {

  let count = 0
  const releases: Array<Record<string, unknown>> = []

  do {

    const response = await ApiClient.search('release', query, Math.min(max, 100), releases.length)
    const data = RawReleaseSearchSchema.validate(response)

    if (count === 0) count = data.count
    for (const release of data.releases) releases.push(release)

  } while (releases.length < Math.min(count, max))

  return { count, releases }

}
