import { siteInfo } from "./siteData"

export const t = (translation, locale = siteInfo.defaultLocale ) => {
    return translation[locale] || ""
}