// TYPES
export type { Entity, LifeSpan, Area, Alias, Tag } from '@interfaces/common'
export type { AliasType, ArtistType, ArtistGender, AreaType } from '@interfaces/enums'
export type { Artist } from '@interfaces/entities'

// RAW-SEARCH
export { type RawArtistSearch, searchRawArtist } from '@requests/artist/raw-search'
export { type RawReleaseGroupSearch, searchRawReleaseGroup } from '@requests/release-group/raw-search'
export { type RawReleaseSearch, searchRawRelease } from '@requests/release/raw-search'
export { type RawRecordingSearch, searchRawRecording } from '@requests/recording/raw-search'
export { type RawWorkSearch, searchRawWork } from '@requests/work/raw-search'

// RAW-LOOKUP
export { lookupRawArtist } from '@requests/artist/raw-lookup'
export { lookupRawReleaseGroup } from '@requests/release-group/raw-lookup'
export { lookupRawRelease } from '@requests/release/raw-lookup'
export { lookupRawRecording } from '@requests/recording/raw-lookup'
export { lookupRawWork } from '@requests/work/raw-lookup'

// RAW-BROWSE
export { type RawArtistBrowse, browseRawArtist } from '@requests/artist/raw-browse'
export { type RawReleaseGroupBrowse, browseRawReleaseGroup } from '@requests/release-group/raw-browse'
export { type RawReleaseBrowse, browseRawRelease } from '@requests/release/raw-browse'
export { type RawRecordingBrowse, browseRawRecording } from '@requests/recording/raw-browse'
export { type RawWorkBrowse, browseRawWork } from '@requests/work/raw-browse'
