class Scene {
  //----------------------------------------------------------------------CONSTRUCTOR
  // https://www.mslinn.com/blog/2021/02/11/javascript-named-arguments.html
  constructor({number=0, title="Untitled"}) {
    this._number = number
    this._title = title
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

  //----------------------------------------------------------------------GETTERS

  //----------------------------------------------------------------------SETTERS

  //----------------------------------------------------------------------HELPERS


};

const scene = new Scene({title: "Test"});

console.log(scene);