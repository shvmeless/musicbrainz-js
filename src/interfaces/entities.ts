/* eslint @stylistic/quote-props: ["error", "always"] */

// IMPORTS
import type { ArtistGender, ArtistType, PrimaryType, SecondaryType, Status } from '@interfaces/enums'
import type { Alias, Area, LabelInfo, LifeSpan, Tag, TextRepresentation } from '@interfaces/common'
import type { ArtistCredit, ReleaseMedia, ReleaseEvent, ReleaseGroupSlim, ReleaseSlim, RecordingRelease } from '@interfaces/secondary'

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

// INTERFACE
export interface Release {
  'id': string
  'score': number
  'status-id'?: string
  'packaging-id'?: string
  'artist-credit-id': string
  'count'?: number
  'title': string
  'status'?: Status
  'packaging'?: string
  'text-representation'?: TextRepresentation
  'artist-credit': Array<ArtistCredit>
  'release-group': ReleaseGroupSlim
  'date'?: string
  'country'?: string
  'release-events'?: Array<ReleaseEvent>
  'barcode'?: string
  'label-info'?: Array<LabelInfo>
  'track-count'?: number
  'media'?: Array<ReleaseMedia>
  'disambiguation'?: string
  'asin'?: string
  'tags'?: Array<Tag>
}

// INTERFACE
export interface Recording {
  'id': string
  'score': number
  'artist-credit-id': string
  'title': string
  'length'?: number
  'video': boolean | null
  'artist-credit': Array<ArtistCredit>
  'first-release-date'?: string
  'releases'?: Array<RecordingRelease>
  'isrcs'?: Array<string>
  'tags'?: Array<Tag>
  'disambiguation'?: string
}
