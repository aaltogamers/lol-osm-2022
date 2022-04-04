import React, { useContext } from "react"
import { translations } from "../translations"
import { LanguageContext } from "../contexts/Language"
import { translate } from "../utils"
import { sectionAnchors } from "../siteData"

const SignUpModule = () => {
    const [langState] = useContext(LanguageContext)
    const t = (translation) => translate(translation, langState)

    return (
        <div className="bg-center min-h-screen min-w-screen flex flex-col items-center"
          id={sectionAnchors.signUp}>
          <div className="pb-[30vh] pt-[28vh] pl-[15vw] pr-[5vw] w-full flex-grow">
              <h1 className="text-theme-red text-3xl lg:text-5xl font-bold pb-5 customFont-PhageRegular">
              { t(translations.titles.signUpTitle) }
              </h1>  
              <p className="text-white whitespace-pre-line">
                { t(translations.content.signUpContent1) }<a className="text-blue-500 underline" href="https://docs.google.com/document/d/1JMTgiNYxr56f3kAA77Qs5LqH3wNQTMMAYkE43NA4I8s/edit?usp=sharing">{t(translations.content.signUpLicenseInfo)}</a>
                { t(translations.content.signUpContent2) }<a className="text-blue-500 underline" href="https://docs.google.com/document/d/1JMTgiNYxr56f3kAA77Qs5LqH3wNQTMMAYkE43NA4I8s/edit">{t(translations.content.signUpMoreInfo)}</a>
                { t(translations.content.signUpLink)}
                <br/><br/>
                <a className="bg-theme-red bg-opacity-80 text-slate rounded-full p-2 m-2" href="https://aaltogamers.typeform.com/to/SpeNVqoN">
                    { t(translations.content.signUpFormButton) }
                </a>
              </p>
          </div>
        </div>
    )
}

export default SignUpModule