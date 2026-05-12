// IMPORTS
import { schemas } from '@shvmeless/schemas'
import type { Entity } from '@interfaces/common'
import { ApiClient } from '@lib/client'

// INTERFACE
export interface RawReleaseGroupBrowse {
  'release-group-count': number
  'release-groups': Array<
    Record<string, unknown>
  >
}

// SCHEMA
const RawReleaseGroupBrowseSchema = schemas.object<RawReleaseGroupBrowse>({
  'release-group-count': schemas.number(),
  'release-groups': schemas.array(
    schemas.record(schemas.unknown()),
  ),
}).strip()

// FUNCTION
export async function browseRawReleaseGroup(link: Entity, mbid: string, max: number = 25): Promise<RawReleaseGroupBrowse> {

  let count = 0
  const groups: Array<Record<string, unknown>> = []

  do {

    const response = await ApiClient.browse('release-group', link, mbid, Math.min(max, 25), groups.length)
    const data = RawReleaseGroupBrowseSchema.validate(response)

    if (count === 0) count = data['release-group-count']
    for (const group of data['release-groups']) groups.push(group)

  } while (groups.length < Math.min(count, max))

  return { 'release-group-count': count, 'release-groups': groups }

}
