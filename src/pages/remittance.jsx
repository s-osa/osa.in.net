import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import { Paper, Typography } from "@material-ui/core"

import Layout from "../components/Layout"
import PageHeading from "../components/PageHeading"

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(2, 2),
    marginBottom: theme.spacing(3),
  },
  remittanceMethod: {
    paddingBottom: theme.spacing(2),
  },
}))

const methods = [
  {
    name: "銀行口座",
    description: "住信SBIネット銀行 ブドウ支店（102） 普通 4821329",
  },
  {
    name: "Kyash",
    description: "sosa",
  },
  {
    name: "Amazon ギフトカード",
    description: "hhelibebcnofnenamg@gmail.com",
  },
]

export default function Index() {
  const classes = useStyles()

  return (
    <Layout title={"Remittance"}>
      <PageHeading text={"Remittance"} />

      <Paper className={classes.paper}>
        {methods.map(method => (
          <div key={method.name} className={classes.remittanceMethod}>
            <Typography variant="h5" component="h3">
              {method.name}
            </Typography>
            <Typography variant="body1">
              {method.description}
            </Typography>
          </div>
        ))}
      </Paper>
    </Layout>
  )
}
