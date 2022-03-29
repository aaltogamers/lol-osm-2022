import React, { useContext } from "react"
import { translations } from "../translations"
import { LanguageContext } from "../contexts/Language"
import { translate } from "../utils"

const LandingModule = () => {
    const [langState] = useContext(LanguageContext)
    const t = (translation) => translate(translation, langState)
    return (
        <div className="bg-teemo-mobile sm:bg-teemo-desktop bg-cover bg-no-repeat bg-center min-h-screen min-w-screen flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl lg:text-[5rem] font-bold underlin customFont-PhageRegular p-1 text-center">
            { t(translations.titles.landingTitle1)}
            </h1>        
            <h1 className="text-white text-xl lg:text-3xl tracking-widest font-bold underlin customFont-PhageRegular pt-3">
            { t(translations.titles.landingTitle2)}
            </h1>
            <h2 className="text-white text-xl lg:text-3xl tracking-widest font-bold underlin customFont-PhageRegular pt-5">
            { t(translations.titles.landingTitle3)}
            </h2>
        </div>
    )
    
}

export default LandingModule