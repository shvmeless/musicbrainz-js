// IMPORTS
import { schemas } from '@shvmeless/schemas'
import { ApiClient } from '@lib/client'

// INTERFACE
export interface RawReleaseGroupSearch {
  'count': number
  'release-groups': Array<
    Record<string, unknown>
  >
}

// SCHEMA
const RawReleaseGroupSearchSchema = schemas.object<RawReleaseGroupSearch>({
  'count': schemas.number(),
  'release-groups': schemas.array(
    schemas.record(schemas.unknown()),
  ),
}).strip()

// FUNCTION
export async function searchRawReleaseGroup(query: string, max: number = 100): Promise<RawReleaseGroupSearch> {

  let count = 0
  const groups: Array<Record<string, unknown>> = []

  do {

    const response = await ApiClient.search('release-group', query, Math.min(max, 100), groups.length)
    const data = RawReleaseGroupSearchSchema.validate(response)

    if (count === 0) count = data.count
    for (const releaseGroup of data['release-groups']) groups.push(releaseGroup)

  } while (groups.length < Math.min(count, max))

  return { 'count': count, 'release-groups': groups }

}
