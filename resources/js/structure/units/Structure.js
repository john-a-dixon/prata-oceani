const { randomUUID } = require("crypto");

class Structure {
  //----------------------------------------------------------------------CONSTRUCTOR
  constructor(unit) {
    this._id = randomUUID();
  }

  //----------------------------------------------------------------------GETTERS
  get id() {
    return this._id;
  }
  //----------------------------------------------------------------------SETTERS

  //----------------------------------------------------------------------HELPERS

};

module.exports = { Structure };