const { Unit } = require("./Unit.js")

class Beat extends Unit {
  //----------------------------------------------------------------------CONSTRUCTOR
  constructor() {
    super("beat");
    
    this._action = {
      character: "",
      behavior: ""
    };
    this._reaction = {
      character: "",
      behavior: ""
    };
  }

  //----------------------------------------------------------------------GETTERS

  //----------------------------------------------------------------------SETTERS

  //----------------------------------------------------------------------HELPERS
  
};

const beat = new Beat();
console.log(beat);