import React from "react"

const Link = ({ children, href }) => {
    return (
        <a 
            className="text-blue-500 underline" 
            href={href || children}
        >
            { children }
        </a>
    )
}

export default Link