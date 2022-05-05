import React, { useContext } from "react"
import { translate } from "../utils.js"
import { LanguageContext } from "../contexts/Language"
import LanguageSelector from "../components/languageSelector"
import { menuItems } from "../siteData.js"

const DesktopMenu = () => {
    const [langState ] = useContext(LanguageContext)
    const t = (translation) => translate(translation, langState)
  
    return (
      <nav className="text-white fixed top-0 right-0 bg-background hidden md:flex flex-col p-2 justify-center items-center space-y-4">
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

export default DesktopMenu