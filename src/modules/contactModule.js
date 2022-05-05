import React, { useContext } from "react"
import { languages, translations } from "../translations"
import { LanguageContext } from "../contexts/Language"
import { translate } from "../utils"
import { sectionAnchors, siteInfo } from "../siteData"
import Link from "../components/link"
import { SocialIcon  } from "react-social-icons"

const { FI, EN } = languages

const SocialIcons = () => {
    return <div className="flex flex-col">
           {Object.entries(siteInfo.socialMedia).map(([key, social]) => 
                <div className="mb-1">
                    <SocialIcon url={social.url} network={social.network} className="mr-2"></SocialIcon>
                    <Link href={social.url} key={key}>
                        {social.label}
                    </Link>
                </div>
            )}</div>
} 

const moduleTranslations = {
    [FI]: <div className="text-white">
        <p>Kysyttävää turnauksen järjestelyistä?</p>
        <p>📨 Sähköposti: <Link href="mailto:board@aaltogamers.fi">board@aaltogamers.fi</Link></p>
        <p>Aalto Gamers kotisivut: <Link href="https://aaltogamers.fi">aaltogamers.fi</Link></p>
        <br/>
        <SocialIcons></SocialIcons>
    </div>,
    [EN]: <div className="text-white">
        <p>Questions about the tournament?</p>
        <p>📨 Email: <Link href="mailto:board@aaltogamers.fi">board@aaltogamers.fi</Link></p>
        <p>Aalto Gamers website: <Link href="https://aaltogamers.fi">aaltogamers.fi</Link></p>
        <br/>
        <SocialIcons></SocialIcons>
    </div>

}

const ContactModule = () => {
    const [langState] = useContext(LanguageContext)
    const t = (translation) => translate(translation, langState)

    return (
        <div className="bg-center min-h-screen min-w-screen flex flex-col items-center"
        id={sectionAnchors.contact}
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

export default ContactModule