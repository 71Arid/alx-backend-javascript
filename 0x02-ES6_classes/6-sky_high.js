import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  set sqft(newSqft) {
    super.sqft = newSqft;
  }

  set floors(newFloors) {
    this._floors = newFloors;
  }

  get sqft() {
    return super.sqft;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
