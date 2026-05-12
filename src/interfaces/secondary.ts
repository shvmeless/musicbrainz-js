/* eslint @stylistic/quote-props: ["error", "always"] */

// IMPORTS
import type { PrimaryType, SecondaryType, Status } from '@interfaces/enums'
import type { Alias } from '@interfaces/common'

// INTERFACE
export interface ArtistSlim {
  'id': string
  'name': string
  'sort-name': string
  'aliases'?: Array<Alias>
  'disambiguation'?: string
}

// INTERFACE
export interface ReleaseGroupSlim {
  'id': string
  'type-id'?: string
  'primary-type-id'?: string
  'title': string
  'primary-type'?: PrimaryType
  'secondary-types'?: Array<SecondaryType>
  'secondary-type-ids'?: Array<string>
}

// INTERFACE
export interface ReleaseSlim {
  'id': string
  'status-id'?: string
  'title': string
  'status'?: Status
}

// INTERFACE
export interface ArtistCredit {
  'joinphrase'?: string
  'name': string
  'artist': ArtistSlim
}

// INTERFACE
export interface ReleaseEvent {
  'date': string
  'area': ArtistSlim
}

// INTERFACE
export interface ReleaseMedia {
  'id': string
  'format'?: string
  'disc-count': number
  'track-count': number
}
