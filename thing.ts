"use strict"

export class Thing {
  private _that: string;
  
  constructor() {
    this._that = 'thing'
  }

  get That() {
    return this._that
  }
  
  private async ThingFirst(): Promise<number> {
    return Promise.resolve<number>(1);
  }
  
  async Thinger(): Promise<number> {
    return await this.ThingFirst();
  }
}