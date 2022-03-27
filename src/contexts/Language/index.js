import React from "react"
import { languageReducer, languageInitialState } from "./reducer"

export const LanguageContext = React.createContext({
  state: languageInitialState,
  dispatch: () => null
})

export const LanguageProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(languageReducer, languageInitialState)

  return (
    <LanguageContext.Provider value={[ state, dispatch ]}>
    	{ children }
    </LanguageContext.Provider>
  )
}