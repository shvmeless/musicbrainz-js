// IMPORTS
import { schemas } from '@shvmeless/schemas'
import { ApiClient } from '@lib/client'

// INTERFACE
export interface RawArtistSearch {
  count: number
  artists: Array<
    Record<string, unknown>
  >
}

// SCHEMA
const RawArtistSearchSchema = schemas.object<RawArtistSearch>({
  count: schemas.number(),
  artists: schemas.array(
    schemas.record(schemas.unknown()),
  ),
}).strip()

// FUNCTION
export async function searchRawArtist(query: string, max: number = 100): Promise<RawArtistSearch> {

  let count = 0
  const artists: Array<Record<string, unknown>> = []

  do {

    const response = await ApiClient.search('artist', query, Math.min(max, 100), artists.length)
    const data = RawArtistSearchSchema.validate(response)

    if (count === 0) count = data.count
    for (const artist of data.artists) artists.push(artist)

  } while (artists.length < Math.min(count, max))

  return { count, artists }

}
