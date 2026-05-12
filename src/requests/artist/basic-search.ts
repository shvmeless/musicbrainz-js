// IMPORTS
import { schemas } from '@shvmeless/schemas'
import type { Artist } from '@interfaces/entities'
import { ArtistSchema } from '@schemas/entities'
import { ApiClient } from '@lib/client'

// INTERFACE
export interface ArtistSearch {
  count: number
  artists: Array<Artist>
}

// SCHEMA
const ArtistSearchSchema = schemas.object<ArtistSearch>({
  count: schemas.number(),
  artists: schemas.array(ArtistSchema),
}).strip()

// FUNCTION
export async function searchArtist(query: string, max: number = 100): Promise<ArtistSearch> {

  let count = 0
  const artists: Array<Artist> = []

  do {

    const response = await ApiClient.search('artist', query, Math.min(max, 100), artists.length)
    const data = ArtistSearchSchema.validate(response)

    if (count === 0) count = data.count
    for (const artist of data.artists) artists.push(artist)

  } while (artists.length < Math.min(count, max))

  return { count, artists }

}
