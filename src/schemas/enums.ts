/* eslint @stylistic/quote-props: ["error", "always"] */

// IMPORTS
import { schemas } from '@shvmeless/schemas'
import { AliasType, AreaType, ArtistGender, ArtistType, PrimaryType, SecondaryType, Status } from '@interfaces/enums'

// ENUM
export const AliasTypeSchema = schemas.enum<AliasType>(
  AliasType.ArtistName,
  AliasType.LegalName,
  AliasType.WorkName,
  AliasType.SearchHint,
)

// ENUM
export const ArtistTypeSchema = schemas.enum<ArtistType>(
  ArtistType.Person,
  ArtistType.Group,
  ArtistType.Orchestra,
  ArtistType.Choir,
  ArtistType.Character,
  ArtistType.Other,
)

// ENUM
export const ArtistGenderSchema = schemas.enum<ArtistGender>(
  ArtistGender.Female,
  ArtistGender.Male,
  ArtistGender.NonBinary,
  ArtistGender.NotApplicable,
)

// ENUM
export const AreaTypeSchema = schemas.enum<AreaType>(
  AreaType.Country,
  AreaType.Subdivision,
  AreaType.County,
  AreaType.Municipality,
  AreaType.City,
  AreaType.District,
  AreaType.Island,
)

// ENUM
export const StatusSchema = schemas.enum<Status>(
  Status.Official,
  Status.Promotion,
  Status.Bootleg,
  Status.PseudoRelease,
  Status.Withdrawn,
  Status.Expunged,
  Status.Cancelled,
)

// ENUM
export const PrimaryTypeSchema = schemas.enum<PrimaryType>(
  PrimaryType.Album,
  PrimaryType.Single,
  PrimaryType.Ep,
  PrimaryType.Broadcast,
  PrimaryType.Other,
)

// ENUM
export const SecondaryTypeSchema = schemas.enum<SecondaryType>(
  SecondaryType.Compilation,
  SecondaryType.Soundtrack,
  SecondaryType.Spokenword,
  SecondaryType.Interview,
  SecondaryType.Audiobook,
  SecondaryType.AudioDrama,
  SecondaryType.Live,
  SecondaryType.Remix,
  SecondaryType.DJmix,
  SecondaryType.MixtapeStreet,
  SecondaryType.Demo,
  SecondaryType.FieldRecording,
  SecondaryType.Other,
)
