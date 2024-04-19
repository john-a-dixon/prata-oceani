const { randomUUID } = require("crypto");

class Unit {
  //----------------------------------------------------------------------CONSTRUCTOR
  constructor(unit) {
    this._id = randomUUID();
    this._location = Unit.setupLocation(unit);
  }

  //----------------------------------------------------------------------GETTERS
  get id() {
    return this._id;
  }

  //----------------------------------------------------------------------SETTERS


  //----------------------------------------------------------------------HELPERS
  static setupLocation(unit) {
    return {a: 9}
  }

};

const test = new Unit("beat");
console.log(test);

module.exports = { Unit };