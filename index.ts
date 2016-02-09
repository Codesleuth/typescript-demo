"use strict"

class Thing {
  _that: string;
  
  constructor() {
    this._that = 'thing'
  }

  get That() {
    return this._that
  }
}

console.log(new Thing().That)