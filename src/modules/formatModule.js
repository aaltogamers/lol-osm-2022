import React, { useContext } from "react"
import { languages, translations } from "../translations"
import { LanguageContext } from "../contexts/Language"
import { translate } from "../utils"
import { sectionAnchors } from "../siteData"
import Link from "../components/link"

const { FI, EN } = languages

const moduleTranslations = {
    [FI]: <div className="text-white">
        <h2>KARSINNAT - Online 14.5 12:00 - 19:00</h2>
        <p>32 tiimin double-elimination, paras yhdestä (BO1). Double-elimination kaaviota ei pelata täysin loppuun, vaan 4 parasta tiimiä jatkavat finaaleihin.</p>
        <br></br>
        <h2>FINAALIT - Espoo 21.5.</h2>
        <p>4 tiimin single-elimination, paras kolmesta (BO3).</p>
        <br></br>
        <h2>SERVER: EU West</h2>
        <br></br>
        <h2>STREAM:</h2>
        <p> Molemmat päivät streamataan osoitteessa <Link href="https://twitch.tv/aaltogamers">twitch.tv/aaltogamers</Link>.</p>
        <br></br>
        <h2>PALKINNOT:</h2>
        <p>1: 1000€</p>
        <p>2: 500€</p>
        <p>3 ja 4: 100€</p>
        <br></br>
        <h2>FINAALIPÄIVÄ:</h2>
        <p>Turnauksen finaalipäivään pääsevät neljä parasta tiimiä ja päivä järjestetään livenä Espoossa lauantaina 21.05. Neljä finaaliin päässyttä tiimiä ovat sitoutuneet osallistumaan finaaliin livenä. Jos tiimi tulee kauempaa, Aalto Gamers voi avustaa tiimiä matkustamisen ja majoituksen kanssa. Avustuksen tarpeesta ja muista finaalipäivän yksityiskohdista keskustellaan neljän finaalitiimin kanssa erikseen karsintojen jälkeen.</p>
        <br></br>
        <h2>SÄÄNNÖT:</h2>
        <Link href="https://docs.google.com/document/d/1qpAEQ6e777UAiiuEsdF4xkvOMcCil-eYR7UILLeNB0I/edit?usp=sharing">Lue säännöt täältä</Link>
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
            { t(translations.titles.formatTitle) }
            </h1>
             { t(moduleTranslations) }

           
        </div>
      </div>
    )
}

export default FormatModule