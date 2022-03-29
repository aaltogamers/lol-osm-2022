import React, { useContext, useState } from "react"
import  { tournamentInfo, sectionAnchors } from "../siteData.js"
import { translate } from "../utils.js"
import { format, compareAsc } from 'date-fns'
import { translations } from "../translations.js"
import { LanguageProvider } from "../contexts/Language"
import { LanguageContext } from "../contexts/Language"
import Head from "../components/head.js"
import MobileHeader from "../components/mobileHeader"
import DesktopMenu from "../components/desktopMenu"

// markup
const IndexPage = () => {
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
  
  const [langState] = useContext(LanguageContext)
  const t = (translation) => translate(translation, langState)

  return (
      <main className="bg-background">
        <Head></Head>
        <MobileHeader 
        showMenu={displayMobileMenu} 
        onMenuItemClick={() => setDisplayMobileMenu(false)} 
        openMenu={() => setDisplayMobileMenu(true)}
        ></MobileHeader>
        <DesktopMenu></DesktopMenu>
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
        <div className="bg-center min-h-screen min-w-screen flex flex-col items-center"
          id={sectionAnchors.signUp}>
          <div className=" pt-[28vh] pl-[15vw] pr-[5vw] w-full flex-grow">
              <h1 className="text-theme-red text-3xl lg:text-5xl font-bold pb-5 customFont-PhageRegular">
              { t(translations.titles.signUpTitle) }
              </h1>  
              <p className="text-white whitespace-pre-line">
                { t(translations.content.signUpContent1) }<a className="text-blue-500 underline" href="https://docs.google.com/document/d/1JMTgiNYxr56f3kAA77Qs5LqH3wNQTMMAYkE43NA4I8s/edit?usp=sharing">{t(translations.content.signUpLicenseInfo)}</a>
                { t(translations.content.signUpContent2) }<a className="text-blue-500 underline" href="https://docs.google.com/document/d/1JMTgiNYxr56f3kAA77Qs5LqH3wNQTMMAYkE43NA4I8s/edit">{t(translations.content.signUpMoreInfo)}</a>

                { t(translations.content.signUpLink)}
              </p>
          </div>
        </div>

      </main>
  )
}

const IndexWithProviders = () => <LanguageProvider><IndexPage></IndexPage></LanguageProvider>

export default IndexWithProviders


