class Scene {
  constructor() {
    this._number = 0
    this._title = "Untitled"
    this._characters = {
      // Denotes characters actively participating in the scene.
      mentioned: [],
      // Denotes characters actively participating in the scene.
      active: []
    }
    this._conflict = {

    }
    // All scene have world elements, such as a setting
    this._world = {
      setting: ""
    }
  }
};

const scene = new Scene();

console.log(scene);