import React, { useContext } from "react"
import {Helmet} from "react-helmet";
import siteInfo from "../siteData"
import { translations } from "../translations";
import { translate } from "../utils.js"
import { LanguageContext } from "../contexts/Language"

const Head = () => {
    const [langState, dispatch] = useContext(LanguageContext)
    const t = (translation) => translate(translation, langState)


    return (
    <Helmet>
        <meta charSet="utf-8" />
        <title>{ t(siteInfo.shortTitle) }</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta>
        <meta name="author" content={ siteInfo.author }></meta>
        <meta name="description" content={ t(siteInfo.description)}></meta>
        <link rel="canonical" href={ t(translations.homePageLink)} />
    </Helmet>
    )
}

export default Head