"use strict"

import {Thing} from './thing'

let promise = new Thing().Thinger()

console.log(promise)

promise.then(console.log)