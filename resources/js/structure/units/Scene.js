const { Unit } = require("./Unit.js")

class Scene extends Unit {
  //----------------------------------------------------------------------CONSTRUCTOR 
  constructor() {
    super();
    this._characters = {
      // Denotes characters actively participating in the scene.
      mentioned: [],
      // Denotes characters actively participating in the scene.
      active: []
    }
    this._conflict = {}
    // All scenes have world elements, such as a setting
    this._world = {
      setting: "",
      factions: []
    }
  }

  //----------------------------------------------------------------------GETTERS

  //----------------------------------------------------------------------SETTERS

  //----------------------------------------------------------------------HELPERS


};

const scene = new Scene({title: "Test"});
console.log(scene.constructor.name);
