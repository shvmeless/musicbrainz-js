// IMPORTS
import { schemas } from '@shvmeless/schemas'
import type { Entity } from '@interfaces/common'
import { ApiClient } from '@lib/client'

// INTERFACE
export interface RawWorkBrowse {
  'work-count': number
  'works': Array<
    Record<string, unknown>
  >
}

// SCHEMA
const RawWorkBrowseSchema = schemas.object<RawWorkBrowse>({
  'work-count': schemas.number(),
  'works': schemas.array(
    schemas.record(schemas.unknown()),
  ),
}).strip()

// FUNCTION
export async function browseRawWork(link: Entity, mbid: string, max: number = 25): Promise<RawWorkBrowse> {

  let count = 0
  const works: Array<Record<string, unknown>> = []

  do {

    const response = await ApiClient.browse('work', link, mbid, Math.min(max, 25), works.length)
    const data = RawWorkBrowseSchema.validate(response)

    if (count === 0) count = data['work-count']
    for (const work of data.works) works.push(work)

  } while (works.length < Math.min(count, max))

  return { 'work-count': count, 'works': works }

}
