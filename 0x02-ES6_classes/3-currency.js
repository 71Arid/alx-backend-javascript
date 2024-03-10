export default class Currency {
  constructor(code, name) {
    this.name = name;
    this.code = code;
  }

  set name(newName) {
    this._name = newName;
  }

  set code(newCode) {
    this._code = newCode;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
