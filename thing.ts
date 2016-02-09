"use strict"

class Thing {
  private _that: string;
  
  constructor() {
    this._that = 'thing'
  }

  get That() {
    return this._that
  }
}