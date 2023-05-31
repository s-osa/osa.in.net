import React from "react"
import Helmet from "react-helmet"

const head = props => (
  <Helmet
    htmlAttributes={{
      lang: "ja"
    }}
    title={(props.title ? props.title + " - " : "") + "osa.in.net"}
  />
)

export default head
