import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { Container, Typography } from "@material-ui/core"
import Head from "./Head"

const useStyles = makeStyles(theme => ({
  titleLink: {
    "text-decoration": "none",
    color: "#000000",
  },
  title: {
    margin: theme.spacing(0, 2),
  },
  container: {
    padding: theme.spacing(2, 0),
  },
}))

export default function Layout({ children, title }) {
  const classes = useStyles()

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Head title={title} />

      <Link to={"/"} className={classes.titleLink}>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          className={classes.title}
        >
          osa.in.net
        </Typography>
      </Link>

      {children}
    </Container>
  )
}
