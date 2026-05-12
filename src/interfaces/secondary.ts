/* eslint @stylistic/quote-props: ["error", "always"] */

// IMPORTS
import type { PrimaryType, SecondaryType, Status } from '@interfaces/enums'
import type { Alias } from '@interfaces/common'

// INTERFACE
export interface ArtistSlim {
  'id': string
  'name': string
  'sort-name': string
  'aliases'?: Array<Alias> | null
  'disambiguation'?: string | null
}

// INTERFACE
export interface ReleaseGroupSlim {
  'id': string
  'type-id'?: string | null
  'primary-type-id'?: string | null
  'title': string
  'primary-type'?: PrimaryType | null
  'secondary-types'?: Array<SecondaryType> | null
  'secondary-type-ids'?: Array<string> | null
}

// INTERFACE
export interface ReleaseSlim {
  'id': string
  'status-id'?: string | null
  'title': string
  'status'?: Status | null
}

// INTERFACE
export interface ArtistCredit {
  'joinphrase'?: string | null
  'name': string
  'artist': ArtistSlim
}

// INTERFACE
export interface ReleaseEvent {
  'date': string
  'area'?: ArtistSlim | null
}

// INTERFACE
export interface ReleaseMedia {
  'id': string
  'format'?: string | null
  'disc-count': number
  'track-count': number
}

// INTERFACE
export interface Track {
  'id': string
  'number': string
  'title': string
  'length'?: number | null
}

// INTERFACE
export interface RecordingReleaseMedia {
  'id': string
  'position': number
  'format'?: string | null
  'track': Array<Track>
  'track-count': number
  'track-offset': number
}

// INTERFACE
export interface RecordingReleaseGroup {
  'id': string
  'type-id'?: string | null
  'primary-type-id'?: string | null
  'title': string
  'primary-type'?: PrimaryType | null
  'secondary-types'?: Array<SecondaryType> | null
  'secondary-type-ids'?: Array<string> | null
  'disambiguation'?: string | null
}

// INTERFACE
export interface RecordingRelease {
  'id': string
  'status-id'?: string | null
  'count': number
  'title': string
  'status'?: Status | null
  'release-group': RecordingReleaseGroup
  'date'?: string | null
  'country'?: string | null
  'release-events'?: Array<ReleaseEvent> | null
  'track-count': number
  'media': Array<RecordingReleaseMedia>
  'artist-credit-id'?: string | null
  'artist-credit'?: Array<ArtistCredit> | null
  'disambiguation'?: string | null
}

// INTERFACE
export interface WorkRecording {
  'id': string
  'title': string
  'video'?: boolean | null
}

// INTERFACE
export interface WorkRelation {
  'type': string
  'type-id': string
  'direction': string
  'artist'?: ArtistSlim | null
  'recording'?: WorkRecording | null
}
