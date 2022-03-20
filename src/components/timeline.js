import * as React from "react"
import  { tournamentInfo } from "../siteData.js"
import { t } from "../utils.js"
import { format, compareAsc } from 'date-fns'

// markup
const IndexPage = () => {
  return (
    <div>
      { Object.entries(tournamentInfo.dates).sort(([key, value], ...rest) => compareAsc(value.date, ...rest)).map( ([key, date]) => {
        return (
          <div key={key}>
            { t(date.name) }: { format(date.date, "MM.dd.yyyy") }
          </div>
        )
      }) }      
    </div>
  )
}

export default IndexPage
