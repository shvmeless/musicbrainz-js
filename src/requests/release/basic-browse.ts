// IMPORTS
import { schemas } from '@shvmeless/schemas'
import type { Entity } from '@interfaces/common'
import type { Release } from '@interfaces/entities'
import { ReleaseSchema } from '@schemas/entities'
import { ApiClient } from '@lib/client'

// INTERFACE
export interface ReleaseBrowse {
  'release-count': number
  'releases': Array<Release>
}

// SCHEMA
const ReleaseBrowseSchema = schemas.object<ReleaseBrowse>({
  'release-count': schemas.number(),
  'releases': schemas.array(ReleaseSchema),
}).strip()

// FUNCTION
export async function browseRelease(link: Entity, mbid: string, max: number = 25): Promise<ReleaseBrowse> {

  let count = 0
  const releases: Array<Release> = []

  do {

    const response = await ApiClient.browse('release', link, mbid, Math.min(max, 25), releases.length)
    const data = ReleaseBrowseSchema.validate(response)

    if (count === 0) count = data['release-count']
    for (const release of data.releases) releases.push(release)

  } while (releases.length < Math.min(count, max))

  return { 'release-count': count, 'releases': releases }

}
