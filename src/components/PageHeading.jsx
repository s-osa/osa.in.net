import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  heading: {
    margin: theme.spacing(2, 1),
  },
}))

export default function Layout(props) {
  const classes = useStyles()

  return (
    <Typography variant="h4" component="h2" className={classes.heading}>
      {props.text}
    </Typography>
  )
}
