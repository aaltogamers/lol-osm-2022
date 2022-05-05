import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const SponsorLogo = ({ sponsor, logos }) => {
    const getImageUrl = () => {
        console.log(logos)
        if (!logos) return "";
        return getImage(logos[0])
    }

    return (
        <div class="logo" key="i">
            <a href={sponsor.link}>
            <GatsbyImage
                class={['logo__image ', ...(sponsor.classes || [])].join(' ')}
                src={getImageUrl()}
                alt={sponsor.label}/>
            </a>
        </div>
    )
}

export default SponsorLogo

