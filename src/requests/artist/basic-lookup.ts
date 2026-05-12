// IMPORTS
import type { Artist } from '@interfaces/entities'
import { ArtistSchema } from '@schemas/entities'
import { ApiClient } from '@lib/client'

// FUNCTION
export async function lookupArtist(mbid: string): Promise<Artist> {
  const response = await ApiClient.lookup('artist', mbid)
  return ArtistSchema.validate(response)
}
