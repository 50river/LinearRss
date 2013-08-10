/**
 * @fileoverview
 */

/** namespace */
var LRSS;
if (!LRSS) LRSS = {};

LRSS.CHECK_POSITION_INTERVAL = 100;
LRSS.FEED_GET_NUM = 10;



/* グローバル変数 */
var lrss;
if (!lrss) lrss = {};

lrss.FeedTarget = function (url, label) {
    this.url = url;
    this.label = label;
}

lrss.feed_list = new Array();

/* WIRED */
lrss.feed_list.unshift(new lrss.FeedTarget("http://rss.rssad.jp/rss/wired/feed.rdf?rss", "WIRED.jp"));

/* YAHOO - 国内 */
lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/all-dom.xml", "国内"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/zdn_mkt-dom.xml", "Business Media 誠"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/jct-dom.xml", "J-CASTニュース"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/asahik-dom.xml", "朝日新聞デジタル"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/asiap-dom.xml", "アジアプレス"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/cbn-dom.xml", "医療介護ＣＢニュース"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/kana-dom.xml", "カナロコ"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/san-dom.xml", "産経新聞"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/spnannex-dom.xml", "スポニチアネックス"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/bengocom-dom.xml", "弁護士ドットコム"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/rps-dom.xml", "レスポンス"));

/* YAHOO - 国際 */
lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/all-c_int.xml", "国際"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/zdn_mkt-c_int.xml", "Business Media 誠"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/cnn-c_int.xml", "CNN.co.jp"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/rcdc-c_int.xml", "Record China"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/xinhua-c_int.xml", "XINHUA.JP"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/asahik-c_int.xml", "朝日新聞デジタル"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/asiap-c_int.xml", "アジアプレス"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/indonews-c_int.xml", "インド新聞"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/wsj-c_int.xml", "ウォール・ストリート・ジャーナル"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/scn-c_int.xml", "サーチナ"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/san-c_int.xml", "産経新聞"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/cnippou-c_int.xml", "中央日報日本語版"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/chosun-c_int.xml", "朝鮮日報日本語版"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/natiogeog-c_int.xml", "ナショナルジオグラフィック"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/yonh-c_int.xml", "聯合ニュース"));

/* YAHOO - 経済 */
lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/all-bus.xml", "経済"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/zdn_mkt-bus.xml", "Business Media 誠"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/impress-bus.xml", "Impress Watch"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/jct-bus.xml", "J-CASTニュース"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/sh_mon-bus.xml", "MONEYzine"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/qbiz-bus.xml", "qBiz 西日本新聞経済電子版"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/fsi-bus.xml", "SankeiBiz"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/asahik-bus.xml", "朝日新聞デジタル"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/wsj-bus.xml", "ウォール・ストリート・ジャーナル"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/economic-bus.xml", "エコノミックニュース"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/kenkoshin-bus.xml", "健康産業新聞"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/kenkosoku-bus.xml", "健康産業速報"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/scn-bus.xml", "サーチナ"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/san-bus.xml", "産経新聞"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/teikokudb-bus.xml", "帝国データバンク"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/nkbp_tren-bus.xml", "日経トレンディネット"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/zdn_b-bus.xml", "誠 Biz.ID"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/rps-bus.xml", "レスポンス"));

/* YAHOO - エンターテイメント */
lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/all-c_ent.xml", "エンターテイメント"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/cine-c_ent.xml", "cinemacafe.net"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/cinranet-c_ent.xml", "CINRA.NET"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/impress-c_ent.xml", "Impress Watch"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/zdn_lp-c_ent.xml", "ITmedia LifeStyle"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/zdn_m-c_ent.xml", "ITmedia Mobile"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/zdn_pc-c_ent.xml", "ITmedia PC USER"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/it_gadget-c_ent.xml", "ITmedia ガジェット"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/zdn_n-c_ent.xml", "ITmedia ニュース"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/jct-c_ent.xml", "J-CASTニュース"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/mvwalk-c_ent.xml", "Movie Walker"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/rbb-c_ent.xml", "RBB TODAY"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/rcdc-c_ent.xml", "Record China"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/tower_r-c_ent.xml", "TOWER RECORDS ONLINE"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/wow-c_ent.xml", "WoW!Korea"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/asahik-c_ent.xml", "朝日新聞デジタル"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/isd-c_ent.xml", "インサイド"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/eiga-c_ent.xml", "映画.com"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/natalieo-c_ent.xml", "お笑いナタリー"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/giz-c_ent.xml", "ギズモード・ジャパン"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/nataliec-c_ent.xml", "コミックナタリー"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/scn-c_ent.xml", "サーチナ"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/san-c_ent.xml", "産経新聞"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/sanspo-c_ent.xml", "サンケイスポーツ"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/flix-c_ent.xml", "シネマトゥデイ"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/pia-c_ent.xml", "チケットぴあ"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/devi-c_ent.xml", "デビュー"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/tospoweb-c_ent.xml", "東スポWeb"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/natalien-c_ent.xml", "ナタリー"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/nkgendai-c_ent.xml", "日刊ゲンダイ"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/piaeiga-c_ent.xml", "ぴあ映画生活"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/mycomj-c_ent.xml", "マイナビニュース"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/ykf-c_ent.xml", "夕刊フジ"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/rps-c_ent.xml", "レスポンス"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/yonh-c_ent.xml", "聯合ニュース"));

/* YAHOO - スポーツ */
lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/all-c_spo.xml", "スポーツ"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/gdo-c_spo.xml", "GDO"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/goal-c_spo.xml", "Goal.com"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/cyc-c_spo.xml", "GooCycle"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/soccerk-c_spo.xml", "SOCCER KING"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/tennisnet-c_spo.xml", "tennis365.net"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/tennisnavi-c_spo.xml", "TENNIS.JP"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/asahik-c_spo.xml", "朝日新聞デジタル"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/at_s-c_spo.xml", "＠S［アットエス］"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/gbr-c_spo.xml", "イーファイト"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/economic-c_spo.xml", "エコノミックニュース"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/rcg-c_spo.xml", "オートスポーツweb"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/kana-c_spo.xml", "カナロコ"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/gekisaka-c_spo.xml", "ゲキサカ"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/alba-c_spo.xml", "ゴルフ情報ALBA.Net"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/scn-c_spo.xml", "サーチナ"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/saitama-c_spo.xml", "埼玉新聞"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/san-c_spo.xml", "産経新聞"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/sanspo-c_spo.xml", "サンケイスポーツ"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/spnavi-c_spo.xml", "スポーツナビ"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/spnannex-c_spo.xml", "スポニチアネックス"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/pia-c_spo.xml", "チケットぴあ"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/tospoweb-c_spo.xml", "東スポWeb"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/nkgendai-c_spo.xml", "日刊ゲンダイ"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/nksports-c_spo.xml", "日刊スポーツ"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/ykf-c_spo.xml", "夕刊フジ"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/rps-c_spo.xml", "レスポンス"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/yonh-c_spo.xml", "聯合ニュース"));

/* YAHOO - IT・科学 */
lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/all-c_sci.xml", "IT・科学"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/bcn-c_sci.xml", "BCN"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/cnetj-c_sci.xml", "CNET Japan"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/engadget-c_sci.xml", "Engadget 日本版"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/impress-c_sci.xml", "Impress Watch"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/it_ebook-c_sci.xml", "ITmedia eBook USER"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/zdn_lp-c_sci.xml", "ITmedia LifeStyle"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/zdn_m-c_sci.xml", "ITmedia Mobile"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/zdn_pc-c_sci.xml", "ITmedia PC USER"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/zdn_ep-c_sci.xml", "ITmedia エンタープライズ"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/it_gadget-c_sci.xml", "ITmedia ガジェット"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/it_camera-c_sci.xml", "ITmedia デジカメプラス"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/zdn_n-c_sci.xml", "ITmedia ニュース"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/inet-c_sci.xml", "japan.internet.com"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/jct-c_sci.xml", "J-CASTニュース"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/sh_mar-c_sci.xml", "MarkeZine"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/rbb-c_sci.xml", "RBB TODAY"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/scan-c_sci.xml", "ScanNetSecurity"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/sorae_jp-c_sci.xml", "sorae.jp"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/techcr-c_sci.xml", "TechCrunch Japan"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/zdn_tt-c_sci.xml", "TechTargetジャパン"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/asahik-c_sci.xml", "朝日新聞デジタル"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/zdn_ait-c_sci.xml", "＠IT"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/economic-c_sci.xml", "エコノミックニュース"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/etype-c_sci.xml", "エンジニアtype"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/giz-c_sci.xml", "ギズモード・ジャパン"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/scn-c_sci.xml", "サーチナ"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/san-c_sci.xml", "産経新聞"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/natiogeog-c_sci.xml", "ナショナルジオグラフィック 公式日本語サイト"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/nkbp_tren-c_sci.xml", "日経トレンディネット"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/it_nlab-c_sci.xml", "ねとらぼ"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/mycomj-c_sci.xml", "マイナビニュース"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/zdn_b-c_sci.xml", "誠 Biz.ID"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/rps-c_sci.xml", "レスポンス"));

/* YAHOO - ライフ */
lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/all-c_life.xml", "ライフ"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/cinranet-c_life.xml", "CINRA.NET"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/diet-c_life.xml", "Diet＆Beauty"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/fashions-c_life.xml", "Fashionsnap.com"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/nhonz-c_life.xml", "HONZ"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/relaxnews-c_life.xml", "Relaxnews"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/suumoj-c_life.xml", "SUUMOジャーナル"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/asahik-c_life.xml", "朝日新聞デジタル"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/san-c_life.xml", "産経新聞"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/sanyoiryo-c_life.xml", "山陽新聞岡山医療ガイド"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/nkbp_tren-c_life.xml", "日経トレンディネット"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/bengocom-c_life.xml", "弁護士ドットコム"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/mycomj-c_life.xml", "マイナビニュース"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/resemom-c_life.xml", "リセマム"));

/* YAHOO - 地域 */
lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/all-loc.xml", "地域"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/at_s-loc.xml", "＠S［アットエス］"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/ehime-loc.xml", "愛媛新聞ONLINE"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/okinawat-loc.xml", "沖縄タイムス"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/kana-loc.xml", "カナロコ"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/kitanihon-loc.xml", "北日本新聞"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/saitama-loc.xml", "埼玉新聞"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/san-loc.xml", "産経新聞"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/sanyoiryo-loc.xml", "山陽新聞岡山医療ガイド"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/battenga-loc.xml", "ばってんがサイト"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/fukui-loc.xml", "福井新聞ＯＮＬＩＮＥ"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/fminpo-loc.xml", "福島民報"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/minyu-loc.xml", "福島民友新聞"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/mjikenbo-loc.xml", "ミニ事件簿"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/miyazaki-loc.xml", "宮崎日日新聞"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/minkei-loc.xml", "みんなの経済新聞ネットワーク"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/yamagata-loc.xml", "山形新聞"));
//lrss.feed_list.unshift(new lrss.FeedTarget("http://headlines.yahoo.co.jp/rss/rtn-loc.xml", "両丹日日新聞"));