// IMPORTS
import type { ReleaseGroup } from '@interfaces/entities'
import { ReleaseGroupSchema } from '@schemas/entities'
import { ApiClient } from '@lib/client'

// FUNCTION
export async function lookupReleaseGroup(mbid: string): Promise<ReleaseGroup> {
  const response = await ApiClient.lookup('release-group', mbid)
  return ReleaseGroupSchema.validate(response)
}
