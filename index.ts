"use strict"

class Thing {
  constructor() {
    this._that = 'thing'
  }

  get That() {
    return this._that
  }
}

console.log(new Thing().That)