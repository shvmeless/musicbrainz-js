// CLASS
export class Throttler {

  // PROPERTIES
  private static interval: number = 1000
  private static buffer: number = 100
  private static next: number | null = null

  // METHOD
  private static async sleep(ms: number): Promise<unknown> {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  // METHOD
  public static async throttle<T>(request: () => Promise<T>): Promise<T> {

    const start = Date.now()

    if (this.next === null) {
      this.next = (start + this.interval)
      return await request()
    }

    const remaining = (this.next - start)
    this.next = (start + remaining + this.interval)

    if (remaining > 0) await this.sleep(remaining + this.buffer)

    return await request()

  }

}
