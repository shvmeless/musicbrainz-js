/* eslint @stylistic/quote-props: ["error", "always"] */

// IMPORTS
import type { AreaType } from '@interfaces/enums'

// TYPE
export type Entity = 'artist' | 'release-group' | 'release' | 'recording' | 'work'

// INTERFACE
export interface LifeSpan {
  'begin': string | null
  'ended': boolean | null
  'end': string | null
}

// INTERFACE
export interface Area {
  'id': string
  'type': AreaType | null
  'type-id': string | null
  'name': string
  'sort-name': string
  'life-span': LifeSpan | null
}

// INTERFACE
export interface Alias {
  'sort-name': string
  'type-id': string | null
  'name': string
  'locale': string | null
  'type': string | null
  'primary': boolean | null
  'begin-date': string | null
  'end-date': string | null
}

// INTERFACE
export interface Tag {
  'count': number
  'name': string
}

// INTERFACE
export interface TextRepresentation {
  'language': string | null
  'script': string | null
}

// INTERFACE
export interface Label {
  'id': string
  'name': string
}

// INTERFACE
export interface LabelInfo {
  'label': Label | null
  'catalog-number': string | null
}
