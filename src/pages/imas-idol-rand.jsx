import React, { useState, useMemo } from "react"
import { makeStyles } from "@material-ui/core/styles"

import { Button, Chip, Paper, Typography } from "@material-ui/core"

import Layout from "../components/Layout"
import PageHeading from "../components/PageHeading"

const idols = [
    {
      "official_site_number": 10001,
      "name": "秋月 律子",
      "name_kana": "あきづき りつこ",
      "brand": "765PRO ALLSTARS"
    },
    {
      "official_site_number": 10002,
      "name": "天海 春香",
      "name_kana": "あまみ はるか",
      "brand": "765PRO ALLSTARS"
    },
    {
      "official_site_number": 10003,
      "name": "我那覇 響",
      "name_kana": "がなは ひびき",
      "brand": "765PRO ALLSTARS"
    },
    {
      "official_site_number": 10004,
      "name": "菊地 真",
      "name_kana": "きくち まこと",
      "brand": "765PRO ALLSTARS"
    },
    {
      "official_site_number": 10005,
      "name": "如月 千早",
      "name_kana": "きさらぎ ちはや",
      "brand": "765PRO ALLSTARS"
    },
    {
      "official_site_number": 10006,
      "name": "四条 貴音",
      "name_kana": "しじょう たかね",
      "brand": "765PRO ALLSTARS"
    },
    {
      "official_site_number": 10007,
      "name": "高槻 やよい",
      "name_kana": "たかつき やよい",
      "brand": "765PRO ALLSTARS"
    },
    {
      "official_site_number": 10008,
      "name": "萩原 雪歩",
      "name_kana": "はぎわら ゆきほ",
      "brand": "765PRO ALLSTARS"
    },
    {
      "official_site_number": 10009,
      "name": "双海 亜美",
      "name_kana": "ふたみ あみ",
      "brand": "765PRO ALLSTARS"
    },
    {
      "official_site_number": 10010,
      "name": "双海 真美",
      "name_kana": "ふたみ まみ",
      "brand": "765PRO ALLSTARS"
    },
    {
      "official_site_number": 10011,
      "name": "星井 美希",
      "name_kana": "ほしい みき",
      "brand": "765PRO ALLSTARS"
    },
    {
      "official_site_number": 10012,
      "name": "三浦 あずさ",
      "name_kana": "みうら あずさ",
      "brand": "765PRO ALLSTARS"
    },
    {
      "official_site_number": 10013,
      "name": "水瀬 伊織",
      "name_kana": "みなせ いおり",
      "brand": "765PRO ALLSTARS"
    },
    {
      "official_site_number": 20001,
      "name": "相川 千夏",
      "name_kana": "あいかわ ちなつ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20002,
      "name": "愛野 渚",
      "name_kana": "あいの なぎさ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20003,
      "name": "相葉 夕美",
      "name_kana": "あいば ゆみ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20004,
      "name": "相原 雪乃",
      "name_kana": "あいはら ゆきの",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20005,
      "name": "赤城 みりあ",
      "name_kana": "あかぎ みりあ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20006,
      "name": "赤西 瑛梨華",
      "name_kana": "あかにし えりか",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20007,
      "name": "浅野 風香",
      "name_kana": "あさの ふうか",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20008,
      "name": "浅利 七海",
      "name_kana": "あさり ななみ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20009,
      "name": "アナスタシア",
      "name_kana": "あなすたしあ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20010,
      "name": "安部 菜々",
      "name_kana": "あべ なな",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20011,
      "name": "綾瀬 穂乃香",
      "name_kana": "あやせ ほのか",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20012,
      "name": "荒木 比奈",
      "name_kana": "あらき ひな",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20013,
      "name": "有浦 柑奈",
      "name_kana": "ありうら かんな",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20014,
      "name": "安斎 都",
      "name_kana": "あんざい みやこ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20015,
      "name": "イウﾞ･サンタクロース",
      "name_kana": "いうﾞ さんたくろーす",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20016,
      "name": "五十嵐 響子",
      "name_kana": "いがらし きょうこ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20017,
      "name": "池袋 晶葉",
      "name_kana": "いけぶくろ あきは",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20018,
      "name": "伊集院 惠",
      "name_kana": "いじゅういん めぐみ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20019,
      "name": "一ノ瀬 志希",
      "name_kana": "いちのせ しき",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20020,
      "name": "市原 仁奈",
      "name_kana": "いちはら にな",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20021,
      "name": "今井 加奈",
      "name_kana": "いまい かな",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20022,
      "name": "井村 雪菜",
      "name_kana": "いむら せつな",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20023,
      "name": "上田 鈴帆",
      "name_kana": "うえだ すずほ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20024,
      "name": "氏家 むつみ",
      "name_kana": "うじいえ むつみ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20025,
      "name": "梅木 音葉",
      "name_kana": "うめき おとは",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20026,
      "name": "江上 椿",
      "name_kana": "えがみ つばき",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20027,
      "name": "衛藤 美紗希",
      "name_kana": "えとう みさき",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20028,
      "name": "海老原 菜帆",
      "name_kana": "えびはら なほ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20029,
      "name": "及川 雫",
      "name_kana": "おいかわ しずく",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20030,
      "name": "大石 泉",
      "name_kana": "おおいし いずみ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20031,
      "name": "太田 優",
      "name_kana": "おおた ゆう",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20032,
      "name": "大槻 唯",
      "name_kana": "おおつき ゆい",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20033,
      "name": "大西 由里子",
      "name_kana": "おおにし ゆりこ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20034,
      "name": "大沼 くるみ",
      "name_kana": "おおぬま くるみ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20035,
      "name": "大原 みちる",
      "name_kana": "おおはら みちる",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20036,
      "name": "岡崎 泰葉",
      "name_kana": "おかざき やすは",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20037,
      "name": "緒方 智絵里",
      "name_kana": "おがた ちえり",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20038,
      "name": "奥山 沙織",
      "name_kana": "おくやま さおり",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20039,
      "name": "乙倉 悠貴",
      "name_kana": "おとくら ゆうき",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20040,
      "name": "片桐 早苗",
      "name_kana": "かたぎり さなえ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20041,
      "name": "上条 春菜",
      "name_kana": "かみじょう はるな",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20042,
      "name": "神谷 奈緒",
      "name_kana": "かみや なお",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20043,
      "name": "川島 瑞樹",
      "name_kana": "かわしま みずき",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20044,
      "name": "神崎 蘭子",
      "name_kana": "かんざき らんこ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20045,
      "name": "岸部 彩華",
      "name_kana": "きしべ あやか",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20046,
      "name": "喜多 日菜子",
      "name_kana": "きた ひなこ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20047,
      "name": "北川 真尋",
      "name_kana": "きたがわ まひろ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20048,
      "name": "喜多見 柚",
      "name_kana": "きたみ ゆず",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20049,
      "name": "木場 真奈美",
      "name_kana": "きば まなみ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20050,
      "name": "木村 夏樹",
      "name_kana": "きむら なつき",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20051,
      "name": "キャシー･グラハム",
      "name_kana": "きゃしー ぐらはむ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20052,
      "name": "桐野 アヤ",
      "name_kana": "きりの あや",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20053,
      "name": "桐生 つかさ",
      "name_kana": "きりゅう つかさ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20054,
      "name": "日下部 若葉",
      "name_kana": "くさかべ わかば",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20055,
      "name": "工藤 忍",
      "name_kana": "くどう しのぶ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20056,
      "name": "クラリス",
      "name_kana": "くらりす",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20057,
      "name": "栗原 ネネ",
      "name_kana": "くりはら ねね",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20058,
      "name": "黒川 千秋",
      "name_kana": "くろかわ ちあき",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20059,
      "name": "黒埼 ちとせ",
      "name_kana": "くろさき ちとせ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20060,
      "name": "ケイト",
      "name_kana": "けいと",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20061,
      "name": "古賀 小春",
      "name_kana": "こが こはる",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20062,
      "name": "輿水 幸子",
      "name_kana": "こしみず さちこ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20063,
      "name": "小関 麗奈",
      "name_kana": "こせき れいな",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20064,
      "name": "小早川 紗枝",
      "name_kana": "こばやかわ さえ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20065,
      "name": "小日向 美穂",
      "name_kana": "こひなた みほ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20066,
      "name": "小松 伊吹",
      "name_kana": "こまつ いぶき",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20067,
      "name": "小室 千奈美",
      "name_kana": "こむろ ちなみ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20068,
      "name": "西園寺 琴歌",
      "name_kana": "さいおんじ ことか",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20069,
      "name": "財前 時子",
      "name_kana": "ざいぜん ときこ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20070,
      "name": "斉藤 洋子",
      "name_kana": "さいとう ようこ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20071,
      "name": "冴島 清美",
      "name_kana": "さえじま きよみ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20072,
      "name": "榊原 里美",
      "name_kana": "さかきばら さとみ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20073,
      "name": "鷺沢 文香",
      "name_kana": "さぎさわ ふみか",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20074,
      "name": "佐久間 まゆ",
      "name_kana": "さくま まゆ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20075,
      "name": "櫻井 桃華",
      "name_kana": "さくらい ももか",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20076,
      "name": "佐々木 千枝",
      "name_kana": "ささき ちえ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20077,
      "name": "佐城 雪美",
      "name_kana": "さじょう ゆきみ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20078,
      "name": "佐藤 心",
      "name_kana": "さとう しん",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20079,
      "name": "沢田 麻理菜",
      "name_kana": "さわだ まりな",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20080,
      "name": "椎名 法子",
      "name_kana": "しいな のりこ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20081,
      "name": "塩見 周子",
      "name_kana": "しおみ しゅうこ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20082,
      "name": "篠原 礼",
      "name_kana": "しのはら れい",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20083,
      "name": "渋谷 凛",
      "name_kana": "しぶや りん",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20084,
      "name": "島村 卯月",
      "name_kana": "しまむら うづき",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20085,
      "name": "首藤 葵",
      "name_kana": "しゅとう あおい",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20086,
      "name": "城ヶ崎 美嘉",
      "name_kana": "じょうがさき みか",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20087,
      "name": "城ヶ崎 莉嘉",
      "name_kana": "じょうがさき りか",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20088,
      "name": "白菊 ほたる",
      "name_kana": "しらぎく ほたる",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20089,
      "name": "白坂 小梅",
      "name_kana": "しらさか こうめ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20090,
      "name": "白雪 千夜",
      "name_kana": "しらゆき ちよ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20091,
      "name": "杉坂 海",
      "name_kana": "すぎさか うみ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20092,
      "name": "涼宮 星花",
      "name_kana": "すずみや せいか",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20093,
      "name": "砂塚 あきら",
      "name_kana": "すなづか あきら",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20094,
      "name": "関 裕美",
      "name_kana": "せき ひろみ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20095,
      "name": "瀬名 詩織",
      "name_kana": "せな しおり",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20096,
      "name": "仙崎 恵磨",
      "name_kana": "せんざき えま",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20097,
      "name": "相馬 夏美",
      "name_kana": "そうま なつみ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20098,
      "name": "高垣 楓",
      "name_kana": "たかがき かえで",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20099,
      "name": "高橋 礼子",
      "name_kana": "たかはし れいこ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20100,
      "name": "鷹富士 茄子",
      "name_kana": "たかふじ かこ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20101,
      "name": "高峯 のあ",
      "name_kana": "たかみね のあ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20102,
      "name": "高森 藍子",
      "name_kana": "たかもり あいこ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20103,
      "name": "多田 李衣菜",
      "name_kana": "ただ りいな",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20104,
      "name": "橘 ありす",
      "name_kana": "たちばな ありす",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20105,
      "name": "月宮 雅",
      "name_kana": "つきみや みやび",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20106,
      "name": "辻野 あかり",
      "name_kana": "つじの あかり",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20107,
      "name": "土屋 亜子",
      "name_kana": "つちや あこ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20108,
      "name": "東郷 あい",
      "name_kana": "とうごう あい",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20109,
      "name": "道明寺 歌鈴",
      "name_kana": "どうみょうじ かりん",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20110,
      "name": "十時 愛梨",
      "name_kana": "ととき あいり",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20111,
      "name": "長富 蓮実",
      "name_kana": "ながとみ はすみ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20112,
      "name": "中野 有香",
      "name_kana": "なかの ゆか",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20113,
      "name": "ナターリア",
      "name_kana": "なたーりあ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20114,
      "name": "並木 芽衣子",
      "name_kana": "なみき めいこ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20115,
      "name": "成宮 由愛",
      "name_kana": "なるみや ゆめ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20116,
      "name": "南条 光",
      "name_kana": "なんじょう ひかる",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20117,
      "name": "難波 笑美",
      "name_kana": "なんば えみ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20118,
      "name": "西川 保奈美",
      "name_kana": "にしかわ ほなみ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20119,
      "name": "西島 櫂",
      "name_kana": "にしじま かい",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20120,
      "name": "新田 美波",
      "name_kana": "にった みなみ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20121,
      "name": "二宮 飛鳥",
      "name_kana": "にのみや あすか",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20122,
      "name": "丹羽 仁美",
      "name_kana": "にわ ひとみ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20123,
      "name": "野々村 そら",
      "name_kana": "ののむら そら",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20124,
      "name": "服部 瞳子",
      "name_kana": "はっとり とうこ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20125,
      "name": "浜川 愛結奈",
      "name_kana": "はまかわ あゆな",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20126,
      "name": "浜口 あやめ",
      "name_kana": "はまぐち あやめ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20127,
      "name": "早坂 美玲",
      "name_kana": "はやさか みれい",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20128,
      "name": "速水 奏",
      "name_kana": "はやみ かなで",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20129,
      "name": "原田 美世",
      "name_kana": "はらだ みよ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20130,
      "name": "柊 志乃",
      "name_kana": "ひいらぎ しの",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20131,
      "name": "久川 凪",
      "name_kana": "ひさかわ なぎ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20132,
      "name": "久川 颯",
      "name_kana": "ひさかわ はやて",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20133,
      "name": "日野 茜",
      "name_kana": "ひの あかね",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20134,
      "name": "姫川 友紀",
      "name_kana": "ひめかわ ゆき",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20135,
      "name": "兵藤 レナ",
      "name_kana": "ひょうどう れな",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20136,
      "name": "福山 舞",
      "name_kana": "ふくやま まい",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20137,
      "name": "藤居 朋",
      "name_kana": "ふじい とも",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20138,
      "name": "藤本 里奈",
      "name_kana": "ふじもと りな",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20139,
      "name": "藤原 肇",
      "name_kana": "ふじわら はじめ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20140,
      "name": "双葉 杏",
      "name_kana": "ふたば あんず",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20141,
      "name": "古澤 頼子",
      "name_kana": "ふるさわ よりこ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20142,
      "name": "ヘレン",
      "name_kana": "へれん",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20143,
      "name": "北条 加蓮",
      "name_kana": "ほうじょう かれん",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20144,
      "name": "星 輝子",
      "name_kana": "ほし しょうこ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20145,
      "name": "堀 裕子",
      "name_kana": "ほり ゆうこ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20146,
      "name": "本田 未央",
      "name_kana": "ほんだ みお",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20147,
      "name": "前川 みく",
      "name_kana": "まえかわ みく",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20148,
      "name": "槙原 志保",
      "name_kana": "まきはら しほ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20149,
      "name": "松尾 千鶴",
      "name_kana": "まつお ちづる",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20150,
      "name": "松永 涼",
      "name_kana": "まつなが りょう",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20151,
      "name": "松原 早耶",
      "name_kana": "まつばら さや",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20152,
      "name": "松本 沙理奈",
      "name_kana": "まつもと さりな",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20153,
      "name": "松山 久美子",
      "name_kana": "まつやま くみこ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20154,
      "name": "的場 梨沙",
      "name_kana": "まとば りさ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20155,
      "name": "間中 美里",
      "name_kana": "まなか みさと",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20156,
      "name": "真鍋 いつき",
      "name_kana": "まなべ いつき",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20157,
      "name": "水木 聖來",
      "name_kana": "みずき せいら",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20158,
      "name": "水野 翠",
      "name_kana": "みずの みどり",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20159,
      "name": "水本 ゆかり",
      "name_kana": "みずもと ゆかり",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20160,
      "name": "三船 美優",
      "name_kana": "みふね みゆ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20161,
      "name": "三村 かな子",
      "name_kana": "みむら かなこ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20162,
      "name": "宮本 フレデリカ",
      "name_kana": "みやもと ふれでりか",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20163,
      "name": "三好 紗南",
      "name_kana": "みよし さな",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20164,
      "name": "向井 拓海",
      "name_kana": "むかい たくみ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20165,
      "name": "棟方 愛海",
      "name_kana": "むなかた あつみ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20166,
      "name": "村上 巴",
      "name_kana": "むらかみ ともえ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20167,
      "name": "村松 さくら",
      "name_kana": "むらまつ さくら",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20168,
      "name": "メアリー･コクラン",
      "name_kana": "めありー こくらん",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20169,
      "name": "持田 亜里沙",
      "name_kana": "もちだ ありさ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20170,
      "name": "望月 聖",
      "name_kana": "もちづき ひじり",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20171,
      "name": "桃井 あずき",
      "name_kana": "ももい あずき",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20172,
      "name": "森久保 乃々",
      "name_kana": "もりくぼ のの",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20173,
      "name": "諸星 きらり",
      "name_kana": "もろぼし きらり",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20174,
      "name": "楊 菲菲",
      "name_kana": "やお ふぇいふぇい",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20175,
      "name": "八神 マキノ",
      "name_kana": "やがみ まきの",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20176,
      "name": "矢口 美羽",
      "name_kana": "やぐち みう",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20177,
      "name": "柳 清良",
      "name_kana": "やなぎ きよら",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20178,
      "name": "柳瀬 美由紀",
      "name_kana": "やなせ みゆき",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20179,
      "name": "大和 亜季",
      "name_kana": "やまと あき",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20180,
      "name": "結城 晴",
      "name_kana": "ゆうき はる",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20181,
      "name": "遊佐 こずえ",
      "name_kana": "ゆさ こずえ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20182,
      "name": "夢見 りあむ",
      "name_kana": "ゆめみ りあむ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20183,
      "name": "横山 千佳",
      "name_kana": "よこやま ちか",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20184,
      "name": "吉岡 沙紀",
      "name_kana": "よしおか さき",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20185,
      "name": "依田 芳乃",
      "name_kana": "よりた よしの",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20186,
      "name": "ライラ",
      "name_kana": "らいら",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20187,
      "name": "龍崎 薫",
      "name_kana": "りゅうざき かおる",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20188,
      "name": "若林 智香",
      "name_kana": "わかばやし ともか",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20189,
      "name": "脇山 珠美",
      "name_kana": "わきやま たまみ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 20190,
      "name": "和久井 留美",
      "name_kana": "わくい るみ",
      "brand": "CINDERELLA GIRLS"
    },
    {
      "official_site_number": 30001,
      "name": "伊吹 翼",
      "name_kana": "いぶき つばさ",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30002,
      "name": "エミリー・スチュアート",
      "name_kana": "えみりー すちゅあーと",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30003,
      "name": "大神 環",
      "name_kana": "おおがみ たまき",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30004,
      "name": "春日 未来",
      "name_kana": "かすが みらい",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30005,
      "name": "北上 麗花",
      "name_kana": "きたかみ れいか",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30006,
      "name": "北沢 志保",
      "name_kana": "きたざわ しほ",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30007,
      "name": "木下 ひなた",
      "name_kana": "きのした ひなた",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30008,
      "name": "高坂 海美",
      "name_kana": "こうさか うみ",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30009,
      "name": "桜守 歌織",
      "name_kana": "さくらもり かおり",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30010,
      "name": "佐竹 美奈子",
      "name_kana": "さたけ みなこ",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30011,
      "name": "篠宮 可憐",
      "name_kana": "しのみや かれん",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30012,
      "name": "島原 エレナ",
      "name_kana": "しまばら えれな",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30013,
      "name": "ジュリア",
      "name_kana": "じゅりあ",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30014,
      "name": "白石 紬",
      "name_kana": "しらいし つむぎ",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30015,
      "name": "周防 桃子",
      "name_kana": "すおう ももこ",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30016,
      "name": "高山 紗代子",
      "name_kana": "たかやま さよこ",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30017,
      "name": "田中 琴葉",
      "name_kana": "たなか ことは",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30018,
      "name": "天空橋 朋花",
      "name_kana": "てんくうばし ともか",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30019,
      "name": "徳川 まつり",
      "name_kana": "とくがわ まつり",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30020,
      "name": "所 恵美",
      "name_kana": "ところ めぐみ",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30021,
      "name": "豊川 風花",
      "name_kana": "とよかわ ふうか",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30022,
      "name": "中谷 育",
      "name_kana": "なかたに いく",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30023,
      "name": "永吉 昴",
      "name_kana": "ながよし すばる",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30024,
      "name": "七尾 百合子",
      "name_kana": "ななお ゆりこ",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30025,
      "name": "二階堂 千鶴",
      "name_kana": "にかいどう ちづる",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30026,
      "name": "野々原 茜",
      "name_kana": "ののはら あかね",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30027,
      "name": "箱崎 星梨花",
      "name_kana": "はこざき せりか",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30028,
      "name": "馬場 このみ",
      "name_kana": "ばば このみ",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30029,
      "name": "福田 のり子",
      "name_kana": "ふくだ のりこ",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30030,
      "name": "舞浜 歩",
      "name_kana": "まいはま あゆむ",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30031,
      "name": "真壁 瑞希",
      "name_kana": "まかべ みずき",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30032,
      "name": "松田 亜利沙",
      "name_kana": "まつだ ありさ",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30033,
      "name": "宮尾 美也",
      "name_kana": "みやお みや",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30034,
      "name": "最上 静香",
      "name_kana": "もがみ しずか",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30035,
      "name": "望月 杏奈",
      "name_kana": "もちづき あんな",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30036,
      "name": "百瀬 莉緒",
      "name_kana": "ももせ りお",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30037,
      "name": "矢吹 可奈",
      "name_kana": "やぶき かな",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30038,
      "name": "横山 奈緒",
      "name_kana": "よこやま なお",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 30039,
      "name": "ロコ",
      "name_kana": "ろこ",
      "brand": "MILLION LIVE!"
    },
    {
      "official_site_number": 40001,
      "name": "蒼井 享介",
      "name_kana": "あおい きょうすけ",
      "brand": "SideM"
    },
    {
      "official_site_number": 40002,
      "name": "蒼井 悠介",
      "name_kana": "あおい ゆうすけ",
      "brand": "SideM"
    },
    {
      "official_site_number": 40003,
      "name": "紅井 朱雀",
      "name_kana": "あかい すざく",
      "brand": "SideM"
    },
    {
      "official_site_number": 40004,
      "name": "秋月 涼",
      "name_kana": "あきづき りょう",
      "brand": "SideM"
    },
    {
      "official_site_number": 40005,
      "name": "秋山 隼人",
      "name_kana": "あきやま はやと",
      "brand": "SideM"
    },
    {
      "official_site_number": 40006,
      "name": "握野 英雄",
      "name_kana": "あくの ひでお",
      "brand": "SideM"
    },
    {
      "official_site_number": 40007,
      "name": "アスラン＝ベルゼビュート Ⅱ世",
      "name_kana": "あすらん べるぜびゅーと にせい",
      "brand": "SideM"
    },
    {
      "official_site_number": 40008,
      "name": "天ヶ瀬 冬馬",
      "name_kana": "あまがせ とうま",
      "brand": "SideM"
    },
    {
      "official_site_number": 40009,
      "name": "伊集院 北斗",
      "name_kana": "いじゅういん ほくと",
      "brand": "SideM"
    },
    {
      "official_site_number": 40010,
      "name": "伊瀬谷 四季",
      "name_kana": "いせや しき",
      "brand": "SideM"
    },
    {
      "official_site_number": 40011,
      "name": "卯月 巻緒",
      "name_kana": "うづき まきお",
      "brand": "SideM"
    },
    {
      "official_site_number": 40012,
      "name": "円城寺 道流",
      "name_kana": "えんじょうじ みちる",
      "brand": "SideM"
    },
    {
      "official_site_number": 40013,
      "name": "岡村 直央",
      "name_kana": "おかむら なお",
      "brand": "SideM"
    },
    {
      "official_site_number": 40014,
      "name": "神楽 麗",
      "name_kana": "かぐら れい",
      "brand": "SideM"
    },
    {
      "official_site_number": 40015,
      "name": "柏木 翼",
      "name_kana": "かしわぎ つばさ",
      "brand": "SideM"
    },
    {
      "official_site_number": 40016,
      "name": "兜 大吾",
      "name_kana": "かぶと だいご",
      "brand": "SideM"
    },
    {
      "official_site_number": 40017,
      "name": "神谷 幸広",
      "name_kana": "かみや ゆきひろ",
      "brand": "SideM"
    },
    {
      "official_site_number": 40018,
      "name": "牙崎 漣",
      "name_kana": "きざき れん",
      "brand": "SideM"
    },
    {
      "official_site_number": 40019,
      "name": "北村 想楽",
      "name_kana": "きたむら そら",
      "brand": "SideM"
    },
    {
      "official_site_number": 40020,
      "name": "木村 龍",
      "name_kana": "きむら りゅう",
      "brand": "SideM"
    },
    {
      "official_site_number": 40021,
      "name": "清澄 九郎",
      "name_kana": "きよすみ くろう",
      "brand": "SideM"
    },
    {
      "official_site_number": 40022,
      "name": "葛之葉 雨彦",
      "name_kana": "くずのは あめひこ",
      "brand": "SideM"
    },
    {
      "official_site_number": 40023,
      "name": "黒野 玄武",
      "name_kana": "くろの げんぶ",
      "brand": "SideM"
    },
    {
      "official_site_number": 40024,
      "name": "古論 クリス",
      "name_kana": "ころん くりす",
      "brand": "SideM"
    },
    {
      "official_site_number": 40025,
      "name": "榊 夏来",
      "name_kana": "さかき なつき",
      "brand": "SideM"
    },
    {
      "official_site_number": 40026,
      "name": "桜庭 薫",
      "name_kana": "さくらば かおる",
      "brand": "SideM"
    },
    {
      "official_site_number": 40027,
      "name": "東雲 荘一郎",
      "name_kana": "しののめ そういちろう",
      "brand": "SideM"
    },
    {
      "official_site_number": 40028,
      "name": "信玄 誠司",
      "name_kana": "しんげん せいじ",
      "brand": "SideM"
    },
    {
      "official_site_number": 40029,
      "name": "大河 タケル",
      "name_kana": "たいが たける",
      "brand": "SideM"
    },
    {
      "official_site_number": 40030,
      "name": "鷹城 恭二",
      "name_kana": "たかじょう きょうじ",
      "brand": "SideM"
    },
    {
      "official_site_number": 40031,
      "name": "橘 志狼",
      "name_kana": "たちばな しろう",
      "brand": "SideM"
    },
    {
      "official_site_number": 40032,
      "name": "九十九 一希",
      "name_kana": "つくも かずき",
      "brand": "SideM"
    },
    {
      "official_site_number": 40033,
      "name": "都築 圭",
      "name_kana": "つづき けい",
      "brand": "SideM"
    },
    {
      "official_site_number": 40034,
      "name": "天道 輝",
      "name_kana": "てんどう てる",
      "brand": "SideM"
    },
    {
      "official_site_number": 40035,
      "name": "猫柳 キリオ",
      "name_kana": "ねこやなぎ きりお",
      "brand": "SideM"
    },
    {
      "official_site_number": 40036,
      "name": "硲 道夫",
      "name_kana": "はざま みちお",
      "brand": "SideM"
    },
    {
      "official_site_number": 40037,
      "name": "華村 翔真",
      "name_kana": "はなむら しょうま",
      "brand": "SideM"
    },
    {
      "official_site_number": 40038,
      "name": "ピエール",
      "name_kana": "ぴえーる",
      "brand": "SideM"
    },
    {
      "official_site_number": 40039,
      "name": "姫野 かのん",
      "name_kana": "ひめの かのん",
      "brand": "SideM"
    },
    {
      "official_site_number": 40040,
      "name": "冬美 旬",
      "name_kana": "ふゆみ じゅん",
      "brand": "SideM"
    },
    {
      "official_site_number": 40041,
      "name": "舞田 類",
      "name_kana": "まいた るい",
      "brand": "SideM"
    },
    {
      "official_site_number": 40042,
      "name": "水嶋 咲",
      "name_kana": "みずしま さき",
      "brand": "SideM"
    },
    {
      "official_site_number": 40043,
      "name": "御手洗 翔太",
      "name_kana": "みたらい しょうた",
      "brand": "SideM"
    },
    {
      "official_site_number": 40044,
      "name": "山下 次郎",
      "name_kana": "やました じろう",
      "brand": "SideM"
    },
    {
      "official_site_number": 40045,
      "name": "若里 春名",
      "name_kana": "わかざと はるな",
      "brand": "SideM"
    },
    {
      "official_site_number": 40046,
      "name": "渡辺 みのり",
      "name_kana": "わたなべ みのり",
      "brand": "SideM"
    },
    {
      "official_site_number": 50001,
      "name": "浅倉 透",
      "name_kana": "あさくら とおる",
      "brand": "SHINY COLORS"
    },
    {
      "official_site_number": 50002,
      "name": "有栖川 夏葉",
      "name_kana": "ありすがわ なつは",
      "brand": "SHINY COLORS"
    },
    {
      "official_site_number": 50003,
      "name": "和泉 愛依",
      "name_kana": "いずみ めい",
      "brand": "SHINY COLORS"
    },
    {
      "official_site_number": 50004,
      "name": "市川 雛菜",
      "name_kana": "いちかわ ひなな",
      "brand": "SHINY COLORS"
    },
    {
      "official_site_number": 50005,
      "name": "大崎 甘奈",
      "name_kana": "おおさき あまな",
      "brand": "SHINY COLORS"
    },
    {
      "official_site_number": 50006,
      "name": "大崎 甜花",
      "name_kana": "おおさき てんか",
      "brand": "SHINY COLORS"
    },
    {
      "official_site_number": 50007,
      "name": "風野 灯織",
      "name_kana": "かざの ひおり",
      "brand": "SHINY COLORS"
    },
    {
      "official_site_number": 50008,
      "name": "桑山 千雪",
      "name_kana": "くわやま ちゆき",
      "brand": "SHINY COLORS"
    },
    {
      "official_site_number": 50009,
      "name": "小宮 果穂",
      "name_kana": "こみや かほ",
      "brand": "SHINY COLORS"
    },
    {
      "official_site_number": 50010,
      "name": "西城 樹里",
      "name_kana": "さいじょう じゅり",
      "brand": "SHINY COLORS"
    },
    {
      "official_site_number": 50011,
      "name": "櫻木 真乃",
      "name_kana": "さくらぎ まの",
      "brand": "SHINY COLORS"
    },
    {
      "official_site_number": 50012,
      "name": "白瀬 咲耶",
      "name_kana": "しらせ さくや",
      "brand": "SHINY COLORS"
    },
    {
      "official_site_number": 50013,
      "name": "芹沢 あさひ",
      "name_kana": "せりざわ あさひ",
      "brand": "SHINY COLORS"
    },
    {
      "official_site_number": 50014,
      "name": "園田 智代子",
      "name_kana": "そのだ ちよこ",
      "brand": "SHINY COLORS"
    },
    {
      "official_site_number": 50015,
      "name": "田中 摩美々",
      "name_kana": "たなか まみみ",
      "brand": "SHINY COLORS"
    },
    {
      "official_site_number": 50016,
      "name": "月岡 恋鐘",
      "name_kana": "つきおか こがね",
      "brand": "SHINY COLORS"
    },
    {
      "official_site_number": 50017,
      "name": "八宮 めぐる",
      "name_kana": "はちみや めぐる",
      "brand": "SHINY COLORS"
    },
    {
      "official_site_number": 50018,
      "name": "樋口 円香",
      "name_kana": "ひぐち まどか",
      "brand": "SHINY COLORS"
    },
    {
      "official_site_number": 50019,
      "name": "福丸 小糸",
      "name_kana": "ふくまる こいと",
      "brand": "SHINY COLORS"
    },
    {
      "official_site_number": 50020,
      "name": "黛 冬優子",
      "name_kana": "まゆずみ ふゆこ",
      "brand": "SHINY COLORS"
    },
    {
      "official_site_number": 50021,
      "name": "三峰 結華",
      "name_kana": "みつみね ゆいか",
      "brand": "SHINY COLORS"
    },
    {
      "official_site_number": 50022,
      "name": "杜野 凛世",
      "name_kana": "もりの りんぜ",
      "brand": "SHINY COLORS"
    },
    {
      "official_site_number": 50023,
      "name": "幽谷 霧子",
      "name_kana": "ゆうこく きりこ",
      "brand": "SHINY COLORS"
    },
    {
      "official_site_number": 50024,
      "name": "七草 にちか",
      "name_kana": "ななくさ にちか",
      "brand": "SHINY COLORS"
    },
    {
      "official_site_number": 50025,
      "name": "緋田 美琴",
      "name_kana": "あけた みこと",
      "brand": "SHINY COLORS"
    },
    {
      "official_site_number": 50026,
      "name": "斑鳩 ルカ",
      "name_kana": "いかるが るか",
      "brand": "SHINY COLORS"
    },
    {
      "official_site_number": 210001,
      "name": "日高 愛",
      "name_kana": "ひだか あい",
      "brand": "その他"
    },
    {
      "official_site_number": 210002,
      "name": "水谷 絵理",
      "name_kana": "みずたに えり",
      "brand": "その他"
    },
    {
      "official_site_number": 220001,
      "name": "玲音",
      "name_kana": "れおん",
      "brand": "その他"
    },
    {
      "official_site_number": 230001,
      "name": "詩花",
      "name_kana": "しいか",
      "brand": "その他"
    },
    {
      "official_site_number": 240001,
      "name": "奥空 心白",
      "name_kana": "おくぞら こはく",
      "brand": "その他"
    },
    {
      "official_site_number": 240002,
      "name": "亜夜",
      "name_kana": "あや",
      "brand": "その他"
    },
    {
      "official_site_number": 250001,
      "name": "天峰 秀",
      "name_kana": "あまみね しゅう",
      "brand": "SideM"
    },
    {
      "official_site_number": 250002,
      "name": "花園 百々人",
      "name_kana": "はなぞの ももひと",
      "brand": "SideM"
    },
    {
      "official_site_number": 250003,
      "name": "眉見 鋭心",
      "name_kana": "まゆみ えいしん",
      "brand": "SideM"
    }
  ]

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(2, 2),
    marginBottom: theme.spacing(3)
  },
  list: {
    marginBottom: theme.spacing(1)
  },
}))

const randomIndex = () => {
  return Math.floor(Math.random() * idols.length)
}
export default function ImasRand() {
  const classes = useStyles()

  const [index, setIndex] = useState(1) // 天海春香
  const idol = useMemo(() => idols[index], [index])
  const url = useMemo(() => `https://idollist.idolmaster-official.jp/search/detail/${idol.official_site_number}`, [idol])


  const change = () => {
    setIndex(randomIndex())
  }

  return (
    <Layout title={"idol-rand"}>
      <PageHeading text={"idol-rand"} />

      <Paper className={classes.paper}>
        <p>
          {idol.name}（{idol.name_kana}）
        </p>
        <Chip label={idol.brand} variant="outlined"/>

        <ul>
          <li className={classes.list}>
            <a href={url}>
              公式サイト
            </a>
          </li>
          <li>
            <a href={url} target="_blank">
              公式サイト（別タブで開く）
            </a>
          </li>
        </ul>

        <Button variant="contained" color="primary" onClick={change}>
          ランダムに変更する
        </Button>
      </Paper>
    </Layout>
  )
}
