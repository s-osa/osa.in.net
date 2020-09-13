import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core"

import Layout from "../components/Layout"
import PageHeading from "../components/PageHeading"

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
}))

const rows = [
  { year: 2020, base: 7500000, bonus: 0 },
  { year: 2019, base: 9600000, bonus: 0 },
  { year: 2018, base: 5802000, bonus: 200000 },
  { year: 2017, base: 4728000, bonus: 50000 },
  { year: 2016, base: 4500000, bonus: 0 },
]

export default function Index() {
  const classes = useStyles()

  return (
    <Layout title={"Salary"}>
      <PageHeading text={"Salary"} />

      <TableContainer component={Paper} className={classes.paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Year</TableCell>
              <TableCell align={"right"}>Base [JPY]</TableCell>
              <TableCell align={"right"}>Bonus [JPY]</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.year}>
                <TableCell>{row.year}</TableCell>
                <TableCell align={"right"}>
                  {row.base.toLocaleString()}
                </TableCell>
                <TableCell align={"right"}>
                  {row.bonus.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  )
}
