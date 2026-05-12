// IMPORTS
import { schemas } from '@shvmeless/schemas'
import type { Entity } from '@interfaces/common'
import type { Artist } from '@interfaces/entities'
import { ArtistSchema } from '@schemas/entities'
import { ApiClient } from '@lib/client'

// INTERFACE
export interface ArtistBrowse {
  'artist-count': number
  'artists': Array<Artist>
}

// SCHEMA
const ArtistBrowseSchema = schemas.object<ArtistBrowse>({
  'artist-count': schemas.number(),
  'artists': schemas.array(ArtistSchema),
}).strip()

// FUNCTION
export async function browseArtist(link: Entity, mbid: string, max: number = 25): Promise<ArtistBrowse> {

  let count = 0
  const artists: Array<Artist> = []

  do {

    const response = await ApiClient.browse('artist', link, mbid, Math.min(max, 25), artists.length)
    const data = ArtistBrowseSchema.validate(response)

    if (count === 0) count = data['artist-count']
    for (const artist of data.artists) artists.push(artist)

  } while (artists.length < Math.min(count, max))

  return { 'artist-count': count, 'artists': artists }

}
