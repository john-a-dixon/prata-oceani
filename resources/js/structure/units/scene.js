// THE SCENE OBJECT. THIS WILL LATER BE CONVERTED TO A SCENE CLASS
const scene = (number, title = "Untitled") => {
  return {
    number,
    title,
    characters: {
      // Denotes characters mentioned in the scene.
      mentioned: [],
      // Denotes characters actively participating in the scene.
      active: []
    },
    conflict: {

    },
    world: { // All scene have world elements, such as a setting
      setting: ""
    }
  }
}

console.log(scene());