import React, { useState, useContext } from "react"
import  { menuItems } from "../siteData.js"
import { translate } from "../utils.js"
import { LanguageContext } from "../contexts/Language"
import LanguageSelector from "../components/languageSelector"

const MobileHeader = () => {
    const [langState ] = useContext(LanguageContext)
    const t = (translation) => translate(translation, langState)

    const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

    const openMenu = () => setDisplayMobileMenu(true)
    const onMenuItemClick = () => setDisplayMobileMenu(false)
  
    return (
      <nav className="md:hidden text-white fixed top-0 left-0 w-full bg-background flex flex-row p-2 justify-around items-center">
        <button onClick={openMenu} class="flex-col justify-center items-center align-middle h-fit space-y-2">
          <span class="sr-only">Open menu</span>
          <div class="w-8 h-0.5 bg-white"></div>
          <div class="w-8 h-0.5 bg-white"></div>
          <div class="w-8 h-0.5 bg-white"></div>
        </button>
        <nav className={
          "text-white fixed h-screen top-0 bg-background flex flex-col p-8 justify-start items-center transition-all motion-reduce:transition-none "
          + (displayMobileMenu
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
          </div>
      </nav>
      </nav>
    )
  }

export default MobileHeader