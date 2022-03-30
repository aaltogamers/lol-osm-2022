import React from "react"
import { MDXProvider } from "@mdx-js/react"
import h2 from "../../components/customMDX/h2"

export const CustomMDXProvider = ({ children }) => {
  return (
    <MDXProvider components={h2}>
    	{ children }
    </MDXProvider>
  )
}