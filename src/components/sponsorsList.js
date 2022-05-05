import React from "react"
// import { siteInfo } from "../siteData"
// import SponsorLogo from "./sponsorLogo"
// import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"




const SponsorList = () => {
//     const data = useStaticQuery(graphql`
//     query  {
//       allFile(filter: { sourceInstanceName: { eq: "images" } }) {
//         edges {
//           node {
//             childImageSharp {
//               fixed(width: 125, height: 125) {
//                 ...GatsbyImageSharpFixed
//               }
//             }
//           }
//         }
//       }
//     }
//   `)

    return (
        <StaticImage src="../images/logos/sponsorsz.png"></StaticImage>
        // siteInfo.sponsors.map(sponsor => <SponsorLogo sponsor={sponsor} logos={data.edges}></SponsorLogo>)
    )
}

export default SponsorList

