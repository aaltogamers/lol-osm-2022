import { zonedTimeToUtc } from "date-fns-tz"
import { translations } from "./translations"

export const siteInfo = {
    timezone: 'Europe/Helsinki',
    defaultLocale: "FI"
}

export const tournamentInfo = {
    dates: {
        signUpStart: {
            date: zonedTimeToUtc('2021-04-01 12:00:00.000', siteInfo.timezone),
            name: translations.dates.signUpStart,
            description: null,
        }, 
        signUpEnd: {
            date: zonedTimeToUtc('2021-05-01 12:00:00.000', siteInfo.timezone),
            name: translations.dates.signUpEnd,
            description: null,
        }
    }
}
