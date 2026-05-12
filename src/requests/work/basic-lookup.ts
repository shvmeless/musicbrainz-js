// IMPORTS
import type { Work } from '@interfaces/entities'
import { WorkSchema } from '@schemas/entities'
import { ApiClient } from '@lib/client'

// FUNCTION
export async function lookupWork(mbid: string): Promise<Work> {
  const response = await ApiClient.lookup('work', mbid)
  return WorkSchema.validate(response)
}
