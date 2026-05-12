// IMPORTS
import { schemas } from '@shvmeless/schemas'
import type { Entity } from '@interfaces/common'
import { ApiClient } from '@lib/client'

// INTERFACE
export interface RawArtistBrowse {
  'artist-count': number
  'artists': Array<
    Record<string, unknown>
  >
}

// SCHEMA
const RawArtistBrowseSchema = schemas.object<RawArtistBrowse>({
  'artist-count': schemas.number(),
  'artists': schemas.array(
    schemas.record(schemas.unknown()),
  ),
}).strip()

// FUNCTION
export async function browseRawArtist(link: Entity, mbid: string, max: number = 25): Promise<RawArtistBrowse> {

  let count = 0
  const artists: Array<Record<string, unknown>> = []

  do {

    const response = await ApiClient.browse('artist', link, mbid, Math.min(max, 25), artists.length)
    const data = RawArtistBrowseSchema.validate(response)

    if (count === 0) count = data['artist-count']
    for (const artist of data.artists) artists.push(artist)

  } while (artists.length < Math.min(count, max))

  return { 'artist-count': count, 'artists': artists }

}
