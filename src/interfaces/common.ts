/* eslint @stylistic/quote-props: ["error", "always"] */

// IMPORTS
import type { AliasType, AreaType } from '@interfaces/enums'

// TYPE
export type Entity = 'artist' | 'release-group' | 'release' | 'recording' | 'work'

// INTERFACE
export interface LifeSpan {
  'begin'?: string
  'ended': boolean | null
  'end'?: string
}

// INTERFACE
export interface Area {
  'id': string
  'type'?: AreaType
  'type-id'?: string
  'name': string
  'sort-name': string
  'life-span': LifeSpan
}

// INTERFACE
export interface Alias {
  'sort-name': string
  'type-id'?: string
  'name': string
  'locale': null | string
  'type': AliasType | null
  'primary': boolean | null
  'begin-date': null | string
  'end-date': null | string
}

// INTERFACE
export interface Tag {
  'count': number
  'name': string
}
