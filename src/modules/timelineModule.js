import React, { useContext } from "react"
import { translations } from "../translations"
import { LanguageContext } from "../contexts/Language"
import { translate } from "../utils"
import { tournamentInfo, sectionAnchors } from "../siteData"
import { format, compareAsc } from 'date-fns'

const TimelineModule = () => {
    const [langState] = useContext(LanguageContext)
    const t = (translation) => translate(translation, langState)
    
    return (
        <div className="bg-center min-h-screen min-w-screen flex flex-col items-center"
            id={sectionAnchors.timeline}
        >
            <div className="text-white pt-[28vh] pl-[15vw] pr-[5vw] w-full flex-grow">
                <h1 className="text-3xl lg:text-5xl font-bold pb-5 customFont-PhageRegular">
                { t(translations.titles.timelineTitle) }
                </h1>
                <ul>
                { Object.entries(tournamentInfo.dates).sort(([key, value], ...rest) => compareAsc(value.date, ...rest)).map( ([key, date]) => {
                return (
                    <li key={key}>
                    { format(date.date, "dd.MM.yyyy") } - { t(date.name) }
                    </li>
                )
                }) }    
                </ul>  
            </div>
        </div>
    )
}

export default TimelineModule