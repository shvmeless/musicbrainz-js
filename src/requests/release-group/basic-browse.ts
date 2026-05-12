// IMPORTS
import { schemas } from '@shvmeless/schemas'
import type { Entity } from '@interfaces/common'
import type { ReleaseGroup } from '@interfaces/entities'
import { ReleaseGroupSchema } from '@schemas/entities'
import { ApiClient } from '@lib/client'

// INTERFACE
export interface ReleaseGroupBrowse {
  'release-group-count': number
  'release-groups': Array<ReleaseGroup>
}

// SCHEMA
const ReleaseGroupBrowseSchema = schemas.object<ReleaseGroupBrowse>({
  'release-group-count': schemas.number(),
  'release-groups': schemas.array(ReleaseGroupSchema),
}).strip()

// FUNCTION
export async function browseReleaseGroup(link: Entity, mbid: string, max: number = 25): Promise<ReleaseGroupBrowse> {

  let count = 0
  const groups: Array<ReleaseGroup> = []

  do {

    const response = await ApiClient.browse('release-group', link, mbid, Math.min(max, 25), groups.length)
    const data = ReleaseGroupBrowseSchema.validate(response)

    if (count === 0) count = data['release-group-count']
    for (const group of data['release-groups']) groups.push(group)

  } while (groups.length < Math.min(count, max))

  return { 'release-group-count': count, 'release-groups': groups }

}
