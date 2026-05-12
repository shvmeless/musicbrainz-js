// IMPORTS
import { schemas } from '@shvmeless/schemas'
import type { ReleaseGroup } from '@interfaces/entities'
import { ReleaseGroupSchema } from '@schemas/entities'
import { ApiClient } from '@lib/client'

// INTERFACE
export interface ReleaseGroupSearch {
  'count': number
  'release-groups': Array<ReleaseGroup>
}

// SCHEMA
const ReleaseGroupSearchSchema = schemas.object<ReleaseGroupSearch>({
  'count': schemas.number(),
  'release-groups': schemas.array(ReleaseGroupSchema),
}).strip()

// FUNCTION
export async function searchReleaseGroup(query: string, max: number = 100): Promise<ReleaseGroupSearch> {

  let count = 0
  const groups: Array<ReleaseGroup> = []

  do {

    const response = await ApiClient.search('release-group', query, Math.min(max, 100), groups.length)
    const data = ReleaseGroupSearchSchema.validate(response)

    if (count === 0) count = data.count
    for (const releaseGroup of data['release-groups']) groups.push(releaseGroup)

  } while (groups.length < Math.min(count, max))

  return { 'count': count, 'release-groups': groups }

}
