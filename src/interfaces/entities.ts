/* eslint @stylistic/quote-props: ["error", "always"] */

// IMPORTS
import type { Alias, Area, LifeSpan, Tag } from '@interfaces/common'
import type { ArtistGender, ArtistType } from '@interfaces/enums'

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
