/* eslint @stylistic/quote-props: ["error", "always"] */

// IMPORTS
import type { ArtistGender, ArtistType, PrimaryType, SecondaryType, Status } from '@interfaces/enums'
import type { Alias, Area, LabelInfo, LifeSpan, Tag, TextRepresentation } from '@interfaces/common'
import type { ArtistCredit, ReleaseMedia, ReleaseEvent, ReleaseGroupSlim, ReleaseSlim, RecordingRelease, WorkRelation } from '@interfaces/secondary'

// INTERFACE
export interface Artist {
  'id': string
  'type'?: ArtistType | null
  'type-id'?: string | null
  'score': number
  'gender-id'?: string | null
  'name': string
  'sort-name': string
  'gender'?: ArtistGender | null
  'country'?: string | null
  'area'?: Area | null
  'begin-area'?: Area | null
  'ipis'?: Array<string> | null
  'isnis'?: Array<string> | null
  'life-span': LifeSpan
  'aliases'?: Array<Alias> | null
  'tags'?: Array<Tag> | null
  'end-area'?: Area | null
  'disambiguation'?: string | null
}

// INTERFACE
export interface ReleaseGroup {
  'id': string
  'type-id'?: string | null
  'score': number
  'primary-type-id'?: string | null
  'artist-credit-id': string
  'count': number
  'title': string
  'first-release-date'?: string | null
  'primary-type'?: PrimaryType | null
  'artist-credit': Array<ArtistCredit>
  'releases'?: Array<ReleaseSlim> | null
  'tags'?: Array<Tag> | null
  'secondary-types'?: Array<SecondaryType> | null
  'secondary-type-ids'?: Array<string> | null
}

// INTERFACE
export interface Release {
  'id': string
  'score': number
  'status-id'?: string | null
  'packaging-id'?: string | null
  'artist-credit-id': string
  'count'?: number | null
  'title': string
  'status'?: Status | null
  'packaging'?: string | null
  'text-representation'?: TextRepresentation | null
  'artist-credit': Array<ArtistCredit>
  'release-group': ReleaseGroupSlim
  'date'?: string | null
  'country'?: string | null
  'release-events'?: Array<ReleaseEvent> | null
  'barcode'?: string | null
  'label-info'?: Array<LabelInfo> | null
  'track-count'?: number | null
  'media'?: Array<ReleaseMedia> | null
  'disambiguation'?: string | null
  'asin'?: string | null
  'tags'?: Array<Tag> | null
}

// INTERFACE
export interface Recording {
  'id': string
  'score': number
  'artist-credit-id': string
  'title': string
  'length'?: number | null
  'video'?: boolean | null
  'artist-credit': Array<ArtistCredit>
  'first-release-date'?: string | null
  'releases'?: Array<RecordingRelease> | null
  'isrcs'?: Array<string> | null
  'tags'?: Array<Tag> | null
  'disambiguation'?: string | null
}

// INTERFACE
export interface Work {
  'id': string
  'type'?: string | null
  'score': number
  'title': string
  'language'?: string | null
  'iswcs'?: Array<string> | null
  'relations': Array<WorkRelation>
  'languages': Array<string>
  'aliases'?: Array<Alias> | null
  'disambiguation'?: string | null
}
