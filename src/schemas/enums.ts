/* eslint @stylistic/quote-props: ["error", "always"] */

// IMPORTS
import { schemas } from '@shvmeless/schemas'
import { AliasType, AreaType, ArtistGender, ArtistType } from '@interfaces/enums'

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
