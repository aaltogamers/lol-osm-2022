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
        },
        qualifiers: {
            date: zonedTimeToUtc('2021-05-14 12:00:00.000', siteInfo.timezone),
            name: translations.dates.qualifiers,
            description: null,
        },
        finals: {
            date: zonedTimeToUtc('2021-05-21 12:00:00.000', siteInfo.timezone),
            name: translations.dates.finals,
            description: null,
        },
    }
}

export const sectionAnchors = {
    info: "info",
    timeline: "timeline",
    format: "format",
    signUp: "sign-up"
}

export const menuItems = [
    {
        title: translations.titles.infoMenuTitle,
        anchor: sectionAnchors.info
    },
    {
        title: translations.titles.timelineTitle,
        anchor: sectionAnchors.timeline
    },
    {
        title: translations.titles.formatTitle,
        anchor: sectionAnchors.format
    }
]
    