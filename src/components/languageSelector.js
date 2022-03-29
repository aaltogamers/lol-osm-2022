import React, { useContext } from "react"
import { languages } from "../translations.js"
import { LanguageContext } from "../contexts/Language"

const LanguageSelector = () => {
    const [langState, dispatch] = useContext(LanguageContext)
  
    return (
      <div className="justify-between">
        {
          Object.entries(languages).map(([key, langString]) => (
            <button 
              className={"text-white p-1 m-1  " + (langString === langState ? "bg-theme-red" : "")} 
              key={key}
              onClick={() => dispatch({type: "set_language", value: langString})}
            >
              {key}
            </button>
          ))
          
        }
      </div>
    )
  }

export default LanguageSelector