import React from "react"

const Link = ({ children, href, className }) => {
    return (
        <a 
            className={"text-blue-500 underline" + " " + className} 
            href={href || children}
        >
            { children }
        </a>
    )
}

export default Link