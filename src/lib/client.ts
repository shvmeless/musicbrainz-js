// IMPORTS
import axios from 'axios'
import type { Entity } from '@interfaces/common'
import { Throttler } from '@lib/throttler'

// CLASS
export class ApiClient {

  // PROPERTIES
  public static readonly BASE_URL: string = 'https://musicbrainz.org/ws/2'

  // METHOD
  public static async search(entity: Entity, query: string, limit: number = 25, offset: number = 0): Promise<unknown> {
    const URL = `${this.BASE_URL}/${entity}`
    return await Throttler.throttle(async () => {
      const response = await axios.get(URL, { params: { query, limit, offset, fmt: 'json' } })
      return response.data as unknown
    })
  }

  // METHOD
  public static async lookup(entity: Entity, mbid: string): Promise<unknown> {
    const URL = `${this.BASE_URL}/${entity}/${mbid}`
    return await Throttler.throttle(async () => {
      const response = await axios.get(URL, { params: { fmt: 'json' } })
      return response.data as unknown
    })
  }

  // METHOD
  public static async browse(entity: Entity, link: Entity, mbid: string, limit: number = 25, offset: number = 0): Promise<unknown> {
    const URL = `${this.BASE_URL}/${entity}?${link}=${mbid}`
    return await Throttler.throttle(async () => {
      const response = await axios.get(URL, { params: { limit, offset, fmt: 'json' } })
      return response.data as unknown
    })
  }

}
