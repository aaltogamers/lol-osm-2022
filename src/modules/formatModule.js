import React, { useContext } from "react"
import { translations } from "../translations"
import { LanguageContext } from "../contexts/Language"
import { translate } from "../utils"
import { sectionAnchors } from "../siteData"

const FormatModule = () => {
    const [langState] = useContext(LanguageContext)
    const t = (translation) => translate(translation, langState)

    return (
        <div className="bg-center min-h-screen min-w-screen flex flex-col items-center"
        id={sectionAnchors.format}
      >
        <div className="pt-[28vh] pl-[15vw] pr-[5vw] w-full flex-grow">
            <h1 className="text-white text-3xl lg:text-5xl font-bold pb-5 customFont-PhageRegular">
            { t(translations.titles.formatTitle) }
            </h1>
            <p className="text-white whitespace-pre-line">
              { t(translations.content.formatContent) }<a className="text-blue-500 underline" href="https://docs.google.com/document/d/1qpAEQ6e777UAiiuEsdF4xkvOMcCil-eYR7UILLeNB0I/edit?usp=sharing">{t(translations.content.formatReadMore)}</a>
            </p> 
        </div>
      </div>
    )
}

export default FormatModule