/* eslint @stylistic/quote-props: ["error", "always"] */

// IMPORTS
import type { Status } from '@interfaces/enums'
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
