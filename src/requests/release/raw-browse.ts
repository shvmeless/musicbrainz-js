// IMPORTS
import { schemas } from '@shvmeless/schemas'
import type { Entity } from '@interfaces/common'
import { ApiClient } from '@lib/client'

// INTERFACE
export interface RawReleaseBrowse {
  'release-count': number
  'releases': Array<
    Record<string, unknown>
  >
}

// SCHEMA
const RawReleaseBrowseSchema = schemas.object<RawReleaseBrowse>({
  'release-count': schemas.number(),
  'releases': schemas.array(
    schemas.record(schemas.unknown()),
  ),
}).strip()

// FUNCTION
export async function browseRawRelease(link: Entity, mbid: string, max: number = 25): Promise<RawReleaseBrowse> {

  let count = 0
  const releases: Array<Record<string, unknown>> = []

  do {

    const response = await ApiClient.browse('release', link, mbid, Math.min(max, 25), releases.length)
    const data = RawReleaseBrowseSchema.validate(response)

    if (count === 0) count = data['release-count']
    for (const release of data.releases) releases.push(release)

  } while (releases.length < Math.min(count, max))

  return { 'release-count': count, 'releases': releases }

}
