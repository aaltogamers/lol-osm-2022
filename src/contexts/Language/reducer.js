
export const languageReducer = (state, action) => {
    console.log(state)
    console.log(action)
    switch (action.type) {
      case "set_language":
        return action.value
  
      default:
        return null
    }
  }
  
  export const languageInitialState = null