// THE SCENE OBJECT. THIS WILL LATER BE CONVERTED TO A SCENE CLASS
const scene = (number, title = "Untitled") => {
  return {
    number,
    title,
    characters: [],
    // Intended emotions. True scene produce emeotions in characters and audience.
    actions: [],
    emotions: {
      character: "", 
      audience: ""
    },
    world: { // All scene have world elements, such as a setting
      setting: ""
    }
  }
}

console.log(scene());