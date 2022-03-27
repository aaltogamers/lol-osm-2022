import React, { useContext, useState } from "react"
import  { tournamentInfo, menuItems, sectionAnchors } from "../siteData.js"
import { translate } from "../utils.js"
import { format, compareAsc } from 'date-fns'
import { languages, translations } from "../translations.js"
import { LanguageProvider } from "../contexts/Language"
import { LanguageContext } from "../contexts/Language"


// markup
const IndexPage = () => {
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
  
  const [langState, dispatch] = useContext(LanguageContext)
  const t = (translation) => translate(translation, langState)

  return (
      <main className="bg-background">
        <MobileHeader 
        showMenu={displayMobileMenu} 
        onMenuItemClick={() => setDisplayMobileMenu(false)} 
        openMenu={() => setDisplayMobileMenu(true)}
        ></MobileHeader>
        <DesktopMenu></DesktopMenu>
        <div className="bg-teemosquare bg-cover bg-no-repeat bg-center min-h-screen min-w-screen flex flex-col justify-center items-center">
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
            <ul className="flex-auto min-w-[200px] text-white flex flex-col justify-center items-start py-10">
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
                    { format(date.date, "MM.dd.yyyy") } - { t(date.name) }
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
                { t(translations.content.formatContent) }
              </p> 
          </div>
        </div>
        <div className="bg-center min-h-screen min-w-screen flex flex-col items-center"
          id={sectionAnchors.signUp}>
          <div className="pt-[28vh] pl-[15vw] pr-[5vw] w-full flex-grow">
              <h1 className="text-theme-red text-3xl lg:text-5xl font-bold pb-5 customFont-PhageRegular">
              { t(translations.titles.signUpTitle) }
              </h1>  
              <p className="text-white whitespace-pre-line">
                { t(translations.content.signUpContent) }
              </p>
          </div>
        </div>

      </main>
  )
}

const MobileHeader = ({ onMenuItemClick, openMenu, showMenu }) => {
  const [langState, dispatch] = useContext(LanguageContext)
  const t = (translation) => translate(translation, langState)

  return (
    <nav className="md:hidden text-white fixed top-0 left-0 w-full bg-background flex flex-row p-2 justify-around items-center">
      <SignUpButton></SignUpButton>
      <button onClick={openMenu} class="flex-col justify-center items-center align-middle h-fit space-y-2">
        <span class="sr-only">Open menu</span>
        <div class="w-8 h-0.5 bg-white"></div>
        <div class="w-8 h-0.5 bg-white"></div>
        <div class="w-8 h-0.5 bg-white"></div>
      </button>
      <nav className={
        "text-white fixed h-screen top-0 bg-background flex flex-col p-8 justify-start items-center transition-all motion-reduce:transition-none "
        + (showMenu
        ? "right-0"
        : "-right-full")
      }>
        <button onClick={onMenuItemClick}>              
          <span class="sr-only">Close menu</span>
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <LanguageSelector></LanguageSelector>
        <div className="flex flex-col h-[100%] justify-center items-center">
          { menuItems.map(menuItem => (
            <a 
              className="p-2 m-1"
              key= {menuItem.anchor}
              href={`#${menuItem.anchor}`}
              onClick={onMenuItemClick}
              >{ t(menuItem.title) }</a>
          )
          )}
          <SignUpButton onClick={onMenuItemClick}></SignUpButton>
        </div>
    </nav>
    </nav>
  )
}

const DesktopMenu = () => {
  const [langState, dispatch] = useContext(LanguageContext)
  const t = (translation) => translate(translation, langState)

  return (
    <nav className="text-white fixed top-0 right-0 bg-background hidden md:flex flex-col p-2 justify-center items-center space-y-4">
      <SignUpButton></SignUpButton>
      { menuItems.map(menuItem => (
        <a
          key= {menuItem.anchor}
          className="p-2 m-1"
          href={`#${menuItem.anchor}`}
          >{ t(menuItem.title) }</a>
          
      )
      )}
      <LanguageSelector></LanguageSelector>
    </nav>
  )
}

const LanguageSelector = () => {
  const [langState, dispatch] = useContext(LanguageContext)

  return (
    <div className="justify-between">
      {
        Object.entries(languages).map(([key, langString]) => (
          <button 
            className={"text-white p-1 m-1  " + (langString === langState ? "bg-theme-red" : "")} 
            key={key}
            onClick={() => dispatch({type: "set_language", value: langString})}
          >
            {key}
          </button>
        ))
        
      }
    </div>
  )
}

const SignUpButton = ({ onClick }) => {
  const [langState, dispatch] = useContext(LanguageContext)
  const t = (translation) => translate(translation, langState)

  return (
    <a className="bg-theme-red bg-opacity-80 text-slate rounded-full p-2 m-2" onClick={onClick} href={`#${sectionAnchors.signUp}`}>
      { t(translations.content.signUpButton) }
    </a>
  )
}

const ArrowDown = () => {
  return (
    <div className="absolute bottom-screen h-8 w-screen justify-center items-center">
      <button className="">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  )
}

const IndexWithProviders = () => <LanguageProvider><IndexPage></IndexPage></LanguageProvider>

export default IndexWithProviders


