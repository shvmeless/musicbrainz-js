// IMPORTS
import { schemas } from '@shvmeless/schemas'
import type { Entity } from '@interfaces/common'
import type { Work } from '@interfaces/entities'
import { WorkSchema } from '@schemas/entities'
import { ApiClient } from '@lib/client'

// INTERFACE
export interface WorkBrowse {
  'work-count': number
  'works': Array<Work>
}

// SCHEMA
const WorkBrowseSchema = schemas.object<WorkBrowse>({
  'work-count': schemas.number(),
  'works': schemas.array(WorkSchema),
}).strip()

// FUNCTION
export async function browseWork(link: Entity, mbid: string, max: number = 25): Promise<WorkBrowse> {

  let count = 0
  const works: Array<Work> = []

  do {

    const response = await ApiClient.browse('work', link, mbid, Math.min(max, 25), works.length)
    const data = WorkBrowseSchema.validate(response)

    if (count === 0) count = data['work-count']
    for (const work of data.works) works.push(work)

  } while (works.length < Math.min(count, max))

  return { 'work-count': count, 'works': works }

}
