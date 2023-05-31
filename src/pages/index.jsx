import React from "react"
import { Link } from "gatsby-theme-material-ui"
import { makeStyles } from "@material-ui/core/styles"

import {
  Avatar,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core"

import Layout from "../components/Layout"
import ListItemExternalLinkIcon from "../components/ListItemExternalLinkIcon"

import { ChevronRight } from "@material-ui/icons"

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(2, 2),
    marginBottom: theme.spacing(3),
  },
}))

export default function Index() {
  const classes = useStyles()

  return (
    <Layout>
      <Paper className={classes.paper}>
        <Typography variant="h5" component="h3">
          Who am I?
        </Typography>

        <List dense="true">
          <ListItem>
            <ListItemText
              primary="Name"
              secondary="OSA Shunsuke"
              primaryTypographyProps={{
                variant: "caption",
                color: "textSecondary",
              }}
              secondaryTypographyProps={{
                variant: "body1",
                color: "textPrimary",
              }}
            />
            <Avatar alt="OSA Shunsuke icon" src="/images/icon.png" />
            <Avatar alt="OSA Shunsuke face" src="/images/face.jpg" />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Location"
              secondary="Yokohama, Japan"
              primaryTypographyProps={{
                variant: "caption",
                color: "textSecondary",
              }}
              secondaryTypographyProps={{
                variant: "body1",
                color: "textPrimary",
              }}
            />
          </ListItem>
        </List>
      </Paper>

      <Paper className={classes.paper}>
        <Typography variant="h5" component="h3">
          Accounts & Resources
        </Typography>

        <List dense="true">
          <ListItem>
            <ListItemText
              primary="Email"
              secondary="hhelibebcnofnenamg@gmail.com"
              primaryTypographyProps={{
                variant: "caption",
                color: "textSecondary",
              }}
              secondaryTypographyProps={{
                variant: "body1",
                color: "textPrimary",
              }}
            />
            <ListItemExternalLinkIcon href="mailto:hhelibebcnofnenamg@gmail.com" />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Twitter"
              secondary="@s_osa_"
              primaryTypographyProps={{
                variant: "caption",
                color: "textSecondary",
              }}
              secondaryTypographyProps={{
                variant: "body1",
                color: "textPrimary",
              }}
            />
            <ListItemExternalLinkIcon href="https://twitter.com/s_osa_" />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="GitHub"
              secondary="s-osa"
              primaryTypographyProps={{
                variant: "caption",
                color: "textSecondary",
              }}
              secondaryTypographyProps={{
                variant: "body1",
                color: "textPrimary",
              }}
            />
            <ListItemExternalLinkIcon href="https://github.com/s-osa" />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Facebook"
              secondary="長 俊祐"
              primaryTypographyProps={{
                variant: "caption",
                color: "textSecondary",
              }}
              secondaryTypographyProps={{
                variant: "body1",
                color: "textPrimary",
              }}
            />
            <ListItemExternalLinkIcon href="https://www.facebook.com/shunsuke.osa" />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Blog"
              secondary="blog.osa.in.net"
              primaryTypographyProps={{
                variant: "caption",
                color: "textSecondary",
              }}
              secondaryTypographyProps={{
                variant: "body1",
                color: "textPrimary",
              }}
            />
            <ListItemExternalLinkIcon href="https://blog.osa.in.net/" />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Blog"
              secondary="ネットの海の片隅で"
              primaryTypographyProps={{
                variant: "caption",
                color: "textSecondary",
              }}
              secondaryTypographyProps={{
                variant: "body1",
                color: "textPrimary",
              }}
            />
            <ListItemExternalLinkIcon href="https://osa.hatenablog.com/" />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Speaker Deck"
              secondary="osa"
              primaryTypographyProps={{
                variant: "caption",
                color: "textSecondary",
              }}
              secondaryTypographyProps={{
                variant: "body1",
                color: "textPrimary",
              }}
            />
            <ListItemExternalLinkIcon href="https://speakerdeck.com/osa" />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Instagram"
              secondary="sh_osa"
              primaryTypographyProps={{
                variant: "caption",
                color: "textSecondary",
              }}
              secondaryTypographyProps={{
                variant: "body1",
                color: "textPrimary",
              }}
            />
            <ListItemExternalLinkIcon href="https://www.instagram.com/sh_osa/" />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="ブクログ"
              secondary="sosa"
              primaryTypographyProps={{
                variant: "caption",
                color: "textSecondary",
              }}
              secondaryTypographyProps={{
                variant: "body1",
                color: "textPrimary",
              }}
            />
            <ListItemExternalLinkIcon href="https://booklog.jp/users/sosa" />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Steam"
              secondary="s_osa"
              primaryTypographyProps={{
                variant: "caption",
                color: "textSecondary",
              }}
              secondaryTypographyProps={{
                variant: "body1",
                color: "textPrimary",
              }}
            />
            <ListItemExternalLinkIcon href="https://steamcommunity.com/id/s_osa" />
          </ListItem>
        </List>
      </Paper>

      <Paper className={classes.paper}>
        <Typography variant="h5" component="h3">
          Contributions
        </Typography>

        <List dense="true">
          <ListItem>
            <ListItemText primary="s-dev talks Organizer" />
            <ListItemExternalLinkIcon href="https://s-dev-talks.connpass.com/" />
          </ListItem>
        </List>
      </Paper>

      <Paper className={classes.paper}>
        <Typography variant="h5" component="h3">
          Experiences
        </Typography>

        <List dense="true">
          <ListItem>
            <ListItemText
              primary="クックパッド株式会社 ソフトウェアエンジニア/マネージャ"
              secondary="2020-06-01/Now"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="株式会社アグリゲート CTO"
              secondary="2019-01-01/2020-01-31"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="クックパッド株式会社 ソフトウェアエンジニア"
              secondary="2016-04-01/2018-12-31"
            />
          </ListItem>
        </List>
      </Paper>

      <Paper className={classes.paper}>
        <Typography variant="h5" component="h3">
          Freelance
        </Typography>

        <Typography variant={"body2"}>
          Web アプリケーション開発を中心に個人でも仕事を受けています。
        </Typography>

        <Link to={"/freelance/"}>
          <Typography align={"right"}>
            <ChevronRight />
          </Typography>
        </Link>
      </Paper>

      <Paper className={classes.paper}>
        <Typography variant="h5" component="h3">
          Certificates
        </Typography>

        <List dense="true">
          <ListItem>
            <ListItemText
              primary="フォークリフト運転技能講習修了"
              secondary="2022-09-11"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="知識検定 1級"
              secondary="2022-03-31"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="AWS Certified Solutions Architect - Associate"
              secondary="2017-11-13"
            />
            <ListItemExternalLinkIcon href="https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2017-11-13&ci=AWS00322226" />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="データベーススペシャリスト"
              secondary="2015-06-19"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="情報セキュリティスペシャリスト"
              secondary="2014-12-19"
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="応用情報技術者" secondary="2012-12-21" />
          </ListItem>
          <ListItem>
            <ListItemText primary="LPIC-1" secondary="2012-09-24" />
          </ListItem>
          <ListItem>
            <ListItemText primary="基本情報技術者" secondary="2012-05-17" />
          </ListItem>
        </List>
      </Paper>
    </Layout>
  )
}
