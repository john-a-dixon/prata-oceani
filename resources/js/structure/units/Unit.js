const { randomUUID } = require("crypto");

class Unit {
  //----------------------------------------------------------------------CONSTRUCTOR
  constructor(unit) {
    this._id = randomUUID();
    this._location = {}
  }

  //----------------------------------------------------------------------GETTERS
  get id() {
    return this._id;
  }

  //----------------------------------------------------------------------SETTERS

  //----------------------------------------------------------------------HELPERS

};

module.exports = { Unit };