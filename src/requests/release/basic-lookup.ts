// IMPORTS
import type { Release } from '@interfaces/entities'
import { ReleaseSchema } from '@schemas/entities'
import { ApiClient } from '@lib/client'

// FUNCTION
export async function lookupRelease(mbid: string): Promise<Release> {
  const response = await ApiClient.lookup('release', mbid)
  return ReleaseSchema.validate(response)
}
