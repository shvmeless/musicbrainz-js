/* eslint @stylistic/quote-props: ["error", "always"] */

// IMPORTS
import type { ArtistGender, ArtistType, PrimaryType, SecondaryType } from '@interfaces/enums'
import type { Alias, Area, LifeSpan, Tag } from '@interfaces/common'
import type { ArtistCredit, ReleaseSlim } from '@interfaces/secondary'

// INTERFACE
export interface Artist {
  'id': string
  'type'?: ArtistType
  'type-id'?: string
  'score': number
  'gender-id'?: string
  'name': string
  'sort-name': string
  'gender'?: ArtistGender
  'country'?: string
  'area'?: Area
  'begin-area'?: Area
  'ipis'?: Array<string>
  'isnis'?: Array<string>
  'life-span': LifeSpan
  'aliases'?: Array<Alias>
  'tags'?: Array<Tag>
  'end-area'?: Area
  'disambiguation'?: string
}

// INTERFACE
export interface ReleaseGroup {
  'id': string
  'type-id'?: string
  'score': number
  'primary-type-id'?: string
  'artist-credit-id': string
  'count': number
  'title': string
  'first-release-date'?: string
  'primary-type'?: PrimaryType
  'artist-credit': Array<ArtistCredit>
  'releases'?: Array<ReleaseSlim>
  'tags'?: Array<Tag>
  'secondary-types'?: Array<SecondaryType>
  'secondary-type-ids'?: Array<string>
}
