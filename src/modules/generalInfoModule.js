import React, { useContext } from "react"
import { translations } from "../translations"
import { LanguageContext } from "../contexts/Language"
import { translate } from "../utils"
import { sectionAnchors } from "../siteData"

const GeneralInfoModule = () => {
    const [langState] = useContext(LanguageContext)
    const t = (translation) => translate(translation, langState)

    return (
        <div className="bg-center min-h-screen min-w-screen flex flex-col items-center"
            id={sectionAnchors.info}
        >
            <div 
            className="pt-[28vh] pl-[15vw] pr-[5vw] max-w-[100vw] flex flex-wrap justify-start items-center"
            >
            <div className="flex-auto md:max-w-[60%]">
                <h1 className="text-white text-3xl lg:text-5xl font-bold pb-5 customFont-PhageRegular">
                { t(translations.titles.infoTitle) }
                </h1>        
                <p className="text-white whitespace-pre-line">
                { t(translations.content.info.description) }
                </p>
            </div>
            <ul className="flex-auto w-screen text-white flex flex-col justify-center items-start py-10">
                {
                [
                    <><b>{t(translations.content.info.what) }</b> { t(translations.content.info.whatContent) }</>,
                    <><b>{ t(translations.content.info.when) }</b> { t(translations.content.info.whenContent) }</>,
                    <><b>{ t(translations.content.info.prizes) }</b> { t(translations.content.info.prizesContent) }</>,
                    <><b>{ t(translations.content.info.whereToSignUp) }</b> { t(translations.content.info.whereToSignUpContent) }</>
                ].map(item => (
                    <li>{item}</li>
                ))
                } 
            </ul>
            </div>
        </div>
    )
}

export default GeneralInfoModule