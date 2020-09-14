import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core"

import Layout from "../components/Layout"
import ListItemExternalLinkIcon from "../components/ListItemExternalLinkIcon"
import PageHeading from "../components/PageHeading"

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(2, 2),
    marginBottom: theme.spacing(3),
  },
  li: {
    paddingBottom: theme.spacing(1),
  },
}))

const clients = [
  { name: "株式会社アグリゲート", url: "https://agrigate.co.jp/" },
  { name: "株式会社リフカム", url: "https://about.refcome.com/" },
  {
    name: "iscream株式会社",
    url: "https://www.wantedly.com/companies/company_2338507",
  },
  { name: "UZRA株式会社", url: null },
  { name: "レンティオ株式会社", url: "https://www.rentio.co.jp/" },
  { name: "クックパッド株式会社", url: "https://info.cookpad.com/" },
  {
    name: "株式会社バルーン",
    url: "https://www.wantedly.com/companies/balloonfrom",
  },
].sort((a, b) => {
  const nameA = a.name.toUpperCase()
  const nameB = b.name.toUpperCase()

  if (nameA < nameB) {
    return -1
  }
  if (nameA > nameB) {
    return 1
  }
  return 0
})

const skills = [
  `Web のバックエンドが主戦場です。普段は主に Rails アプリケーションを書いています。`,
  `複雑なドメインを分析・モデリングして、使いやすく拡張性がある設計に落とし込むことに強い関心があります。`,
  `設計の際には一度 "理想" 側に倒して考えた上で、事業上の優先順位や運用などの "現実" とすり合わせていくというアプローチを取ります。`,
  `技術的には、クラスやメソッドの設計・データベース設計などを評価していただくことが多いです。Rails を書いている際にも適宜 PORO (Plain Old Ruby Object) を用いて小さいオブジェクトを活用する設計を好みます。`,
  `一般的なアプリケーション機能のほか、決済や認証などの実装を担当する機会が多いです。`,
  `専門というわけではありませんが、近年は Web フロントエンドも触っています（React, TypeScript など）。`,
]

export default function Index() {
  const classes = useStyles()

  return (
    <Layout title={"Freelance"}>
      <PageHeading text={"Freelance"} />

      <Paper className={classes.paper}>
        <Typography variant="h5" component="h3">
          Skills & Interests
        </Typography>

        <Typography variant={"body2"}>
          <ul>
            {skills.map((skill, idx) => (
              <li key={idx} className={classes.li}>
                {skill}
              </li>
            ))}
          </ul>
        </Typography>
      </Paper>

      <Paper className={classes.paper}>
        <Typography variant="h5" component="h3">
          Status
        </Typography>

        <Typography variant={"body2"}>
          現在、稼働時間の都合によりガッツリ手を動かすタイプの仕事は新規で受けていません。
          相談・レビュー・壁当てといった稼働時間が短めの仕事であれば受けられる可能性があります。
        </Typography>
      </Paper>

      <Paper className={classes.paper}>
        <Typography variant="h5" component="h3">
          Clients
        </Typography>

        <List dense="true">
          {clients.map(client => (
            <ListItem key={client.name}>
              <ListItemText primary={client.name} />
              {client.url && <ListItemExternalLinkIcon href={client.url} />}
            </ListItem>
          ))}
          <ListItem>
            <ListItemText
              primary="他1社（非公開）"
              primaryTypographyProps={{ color: "textSecondary" }}
            />
          </ListItem>
        </List>
      </Paper>
    </Layout>
  )
}
