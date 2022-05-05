import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const SponsorLogo = ({ sponsor, logos }) => {
    console.log(logos)
    const getImageUrl = (logoName) => {
        console.log(logos.find(logo => logo.images.sources.some(source => source.srcSet.includes(logoName))))
        return logos.find(logo => logo.images.sources.some(source => source.srcSet.includes(logoName)))
    }

    return (
        <div className="m-5 w-1/6">
            <GatsbyImage
                className=""
                image={getImageUrl(sponsor.logoName)}
                alt={sponsor.label}/>
        </div>
    )
}

export default SponsorLogo

