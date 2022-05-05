import React from "react"
import { siteInfo } from "../siteData"
import SponsorLogo from "./sponsorLogo"
import { graphql, useStaticQuery } from "gatsby"




const SponsorList = () => {
    const logos = useStaticQuery(graphql`
    query  {
      logos: allFile( filter: { sourceInstanceName: { eq: "logos" } }) {
        edges {
          node {
            childImageSharp {
                gatsbyImageData(
                    layout: CONSTRAINED
                    placeholder: TRACED_SVG
                    transformOptions: {
                        duotone: {
                            highlight: "#ffffff", shadow: "#ffffff"
                        }
                    }
                    )
            }
          }
        }
      }
    }
  `).logos.edges.map(edge => edge.node.childImageSharp.gatsbyImageData)
    return (
        <div className="mt-10 flex min-w-full justify-center items-center flex-wrap">
            { siteInfo.sponsors.map(sponsor => <SponsorLogo sponsor={sponsor} logos={logos}></SponsorLogo>) }
        </div>
    )
}

export default SponsorList

