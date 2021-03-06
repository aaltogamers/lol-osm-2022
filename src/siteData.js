import { zonedTimeToUtc } from "date-fns-tz"
import {┬átranslations, languages } from "./translations"
export const siteInfo = {
    timezone: 'Europe/Helsinki',
    defaultLocale: languages.FI,
    title: translations.tournamentTitle,
    shortTitle: translations.tournamentTitleShort,
    description: translations.siteDescription,
    author: "Aalto Gamers",
    domain: translations.homePageLink,
    socialMedia: {
        facebook: { 
            label: "Facebook",
            url: "https://facebook.com/aaltogamers/",
        },
        instagram: {
            label: "Instagram",
            url: "http://www.instagram.com/aaltogamers/"
        },
        telegram:  {
            label: "Telegram",
            url: "http://bit.do/aaltogamerslobby",
            network: "telegram"
        },
        discord: {
            label: "Discord",
            url: "https://discord.gg/Ew7nGQqHgc"
        },
        twitch: {
            label: "Twitch",
            url: "http://twitch.tv/aaltogamers"
        }
    },
    sponsors: [
        { 
            label: "Espoo",
            link: "https://www.espoo.fi/fi",
            logoName: "espoologo"
        },
        { 
            label: "Digia",
            link: "https://digia.com/rekrytointi",
            logoName: "digialogo"
        },
        { 
            label: "OSM",
            link: "https://www.osmkisat.fi/",
            logoName: "OSM-LOGO"
        },
        { 
            label: "ED",
            link: "https://www.hartwall.fi/juomat/energiajuomat/ed/",
            logoName: "edlogo"
        },
        { 
            label: "SEUL",
            link: "https://seul.fi/",
            logoName: "seul_FI_EN_lyhyt_valkoinen",
            invert: true
        },
        { 
            label: "Lenovo",
            link: "https://www.lenovo.com/us/en/legion/",
            logoName: "legion",
            invert: true
        },
        { 
            label: "Nokia",
            link: "https://www.nokia.com/about-us/careers/",
            logoName: "nokia",
            invert: true
        },

    ]
}

export const tournamentInfo = {
    dates: {
        signUpStart: {
            date: zonedTimeToUtc('2022-04-01 12:00:00.000', siteInfo.timezone),
            name: translations.dates.signUpStart,
            description: null,
        }, 
        signUpEnd: {
            date: zonedTimeToUtc('2022-05-04 12:00:00.000', siteInfo.timezone),
            name: translations.dates.signUpEnd,
            description: null,
        },
        qualifiers: {
            date: zonedTimeToUtc('2022-05-14 12:00:00.000', siteInfo.timezone),
            name: translations.dates.qualifiers,
            description: null,
        },
        finals: {
            date: zonedTimeToUtc('2022-05-21 12:00:00.000', siteInfo.timezone),
            name: translations.dates.finals,
            description: null,
        },
    }
}

export const sectionAnchors = {
    info: "info",
    timeline: "timeline",
    format: "format",
    signUp: "sign-up",
    contact: "contact"
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
    },
    {
        title: translations.titles.contactTitle,
        anchor: sectionAnchors.contact
    }
]

    
