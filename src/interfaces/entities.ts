/* eslint @stylistic/quote-props: ["error", "always"] */

// IMPORTS
import type { ArtistType, PrimaryType, SecondaryType, Status } from '@interfaces/enums'
import type { Alias, Area, LabelInfo, LifeSpan, Tag, TextRepresentation } from '@interfaces/common'
import type { ArtistCredit, ReleaseMedia, ReleaseEvent, ReleaseGroupSlim, ReleaseSlim, RecordingRelease, WorkRelation } from '@interfaces/secondary'

// INTERFACE
export interface Artist {
  'id': string
  'type': ArtistType | null
  'type-id': string | null
  'score': number | null
  'gender-id': string | null
  'name': string
  'sort-name': string
  'gender': string | null
  'country': string | null
  'area': Area | null
  'begin-area': Area | null
  'ipis': Array<string>
  'isnis': Array<string>
  'life-span': LifeSpan
  'aliases': Array<Alias>
  'tags': Array<Tag>
  'end-area': Area | null
  'disambiguation': string | null
}

// INTERFACE
export interface ReleaseGroup {
  'id': string
  'type-id': string | null
  'score': number | null
  'primary-type-id': string | null
  'artist-credit-id': string | null
  'count': number | null
  'title': string
  'first-release-date': string | null
  'primary-type': PrimaryType | null
  'artist-credit': Array<ArtistCredit>
  'releases': Array<ReleaseSlim>
  'tags': Array<Tag>
  'secondary-types': Array<SecondaryType>
  'secondary-type-ids': Array<string>
}

// INTERFACE
export interface Release {
  'id': string
  'score': number | null
  'status-id': string | null
  'packaging-id': string | null
  'artist-credit-id': string | null
  'count': number | null
  'title': string
  'status': Status | null
  'packaging': string | null
  'text-representation': TextRepresentation | null
  'artist-credit': Array<ArtistCredit>
  'release-group': ReleaseGroupSlim | null
  'date': string | null
  'country': string | null
  'release-events': Array<ReleaseEvent>
  'barcode': string | null
  'label-info': Array<LabelInfo>
  'track-count': number | null
  'media': Array<ReleaseMedia>
  'disambiguation': string | null
  'asin': string | null
  'tags': Array<Tag>
}

// INTERFACE
export interface Recording {
  'id': string
  'score': number | null
  'artist-credit-id': string | null
  'title': string
  'length': number | null
  'video': boolean | null
  'artist-credit': Array<ArtistCredit>
  'first-release-date': string | null
  'releases': Array<RecordingRelease>
  'isrcs': Array<string>
  'tags': Array<Tag>
  'disambiguation': string | null
}

// INTERFACE
export interface Work {
  'id': string
  'type': string | null
  'score': number | null
  'title': string
  'language': string | null
  'iswcs': Array<string>
  'relations': Array<WorkRelation>
  'languages': Array<string>
  'aliases': Array<Alias>
  'disambiguation': string | null
}
