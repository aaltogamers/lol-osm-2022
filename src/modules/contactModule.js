import React, { useContext } from "react"
import { languages, translations } from "../translations"
import { LanguageContext } from "../contexts/Language"
import { translate } from "../utils"
import { sectionAnchors } from "../siteData"
import Link from "../components/link"

const { FI, EN } = languages

const moduleTranslations = {
    [FI]: <div className="text-white">
        <p>Kysyttävää turnauksen järjestelyistä?</p>
        <p>📨 Sähköposti: <Link href="mailto:board@aaltogamers.fi">board@aaltogamers.fi</Link></p>
       
        <p><Link href="">Facebook</Link></p>
        <p><Link href="">Instagram</Link></p>
        <p><Link href="">Facebook</Link></p>
        Aalto Gamers kotisivut: <Link href="https://aaltogamers.fi">aaltogamers.fi</Link>
    </div>,
    [EN]: <>
        <p className="text-white whitespace-pre-line">
           { `QUALIFIERS - Online 14.5. 12:00 - 19:00
            32 team double-elimination, best of 1 (BO1). The double-elimination bracket will not be fully completed, but instead the top 4 teams qualify for the finals
            
            FINALS - Espoo 21.5.
            4 team single-elimination, best of 3 (BO3)
            
            SERVER: EU West
            
            STREAM: 
            Both days will be streamed at `}<Link href="https://twitch.tv/aaltogamers">{`twitch.tv/aaltogamers`}</Link>{`
            
            PRIZES: 
            1st: 1000€
            2nd: 500€
            3rd & 4th: 100€
            
            FINALS DAY:
            The four best teams will get to the Finals day, which will be organised live in Espoo on Saturdy 21.5. These four finals teams are committed to participate at the finals live. If the team arrives from a further distance, Aalto Gamers can assist in the team’s travel and accomodation. The need for this support and other finals day details will be shared and discussed with the four finals teams separately after the preliminaries.

            RULES:\n` }
            <Link href="https://docs.google.com/document/d/1qpAEQ6e777UAiiuEsdF4xkvOMcCil-eYR7UILLeNB0I/edit?usp=sharing">Read the rules here</Link>
        </p> 
    </>

}

const FormatModule = () => {
    const [langState] = useContext(LanguageContext)
    const t = (translation) => translate(translation, langState)

    return (
        <div className="bg-center min-h-screen min-w-screen flex flex-col items-center"
        id={sectionAnchors.format}
      >
        <div className="pt-[28vh] pl-[15vw] pr-[5vw] w-full flex-grow">
            <h1 className="text-white text-3xl lg:text-5xl font-bold pb-5 customFont-PhageRegular">
            { t(translations.titles.contactTitle) }
            </h1>
             { t(moduleTranslations) }

           
        </div>
      </div>
    )
}

export default FormatModule