export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](v) {
    if (v === 'number') {
      return this._size;
    } if (v === 'string') {
      return this._location;
    }
    return this._size;
  }
}
