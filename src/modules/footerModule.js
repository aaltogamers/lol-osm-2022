import React, { useContext } from "react"
import { languages, translations } from "../translations"
import { LanguageContext } from "../contexts/Language"
import { translate } from "../utils"

const { FI, EN } = languages

const moduleTranslations = {
    [FI]: <p className="text-center">Kilpailu ei ole Riot Games, Inc. järjestämä tai sponsoroima.</p>,
    [EN]: <p className="text-center">This competition is not affiliated with or sponsored by Riot Games, Inc.</p>
}

const FooterModule = () => {
    const [langState] = useContext(LanguageContext)
    const t = (translation) => translate(translation, langState)

    return (
        <div className="bg-center min-w-screen min-h-10 p-5 flex flex-col items-center"
      >
        <div className="text-gray-700">
             { t(moduleTranslations) }  
        </div>
      </div>
    )
}

export default FooterModule