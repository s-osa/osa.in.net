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
    name: "Amazon ギフトカード",
    url: "https://www.amazon.co.jp/dp/B004N3APGO",
    description: "Email: hhelibebcnofnenamg+gift@gmail.com",
  },
  {
    name: "Kyash",
    description: "ID: sosa",
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
            {method.url && (
              <a href={method.url} target="_blank" rel="noreferrer noopener">
                <Typography variant="body1">{method.url}</Typography>
              </a>
            )}
            <Typography variant="body1">{method.description}</Typography>
          </div>
        ))}
      </Paper>
    </Layout>
  )
}
