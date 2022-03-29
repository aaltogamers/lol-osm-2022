import React, { useContext } from "react"
import  { sectionAnchors } from "../siteData.js"
import { translate } from "../utils.js"
import { translations } from "../translations.js"
import { LanguageContext } from "../contexts/Language"

const SignUpButton = ({ onClick }) => {
    const [langState ] = useContext(LanguageContext)
    const t = (translation) => translate(translation, langState)
  
    return (
      <a className="bg-theme-red bg-opacity-80 text-slate rounded-full p-2 m-2" onClick={onClick} href={`#${sectionAnchors.signUp}`}>
        { t(translations.content.signUpButton) }
      </a>
    )
  }

export default SignUpButton