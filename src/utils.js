import { siteInfo } from "./siteData"
import { languages } from "./translations"

// export const getSupportedBrowserLocale = () => {
//     const browserLocale = window.navigator.language
//     const matchingLocalLang = 
//         browserLocale
//         ? Object.entries(languages).find(
//             ([key, langString])  => browserLocale.includes(langString))
//         : null
//     return matchingLocalLang[1]
// }

export const translate = (translation, locale ) => {
    if (!locale) {
        locale = siteInfo.defaultLocale
    }
    return translation[locale] || ""
}