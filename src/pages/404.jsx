import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"

import Layout from "../components/Layout"

const useStyles = makeStyles(theme => ({
  body: {
    margin: theme.spacing(8),
  },
}))

export default function Index() {
  const classes = useStyles()

  return (
    <Layout title={"404 Not Found"}>
      <Typography
        variant="h5"
        component="h3"
        align={"center"}
        color={"textSecondary"}
        className={classes.body}
      >
        404 Not Found
      </Typography>
    </Layout>
  )
}
