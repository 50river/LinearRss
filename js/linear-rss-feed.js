/**
 * @fileoverview
 */

/** namespace */
var LRSS;
if (!LRSS) LRSS = {};

LRSS.HTML_TARGET_ID = "main";



/* グローバル変数 */
var lrss;
if (!lrss) lrss = {};

lrss.entries_list = new Array();



/**
 * Feed of LRSS 0.0
 * @constructor
 */
LRSS.Feed = (function () {

    /**
     * コンストラクタ
     */
    function Feed() {
        this.loaded = 0;
        this.index = 0;
    }

    /**
     * 初期化
     */
    Feed.prototype.initialize = function () {
        /* 状態の初期化 */
        google.load("feeds", 1);
        google.setOnLoadCallback(this.getFeed);
    }

    /**
     * 取得
     */
    Feed.prototype.getFeed = function () {
        for (var i = 0; i < lrss.feed_list.length; i++) {
            var feed = new google.feeds.Feed(lrss.feed_list[i].url);
            feed.setNumEntries(LRSS.FEED_GET_NUM);
            feed.load((function (feed) {
                return function (result) {
                    if (!result.error) {
                        for (var i = 0; i < result.feed.entries.length; i++) {
                            lrss.entries_list.unshift(result.feed.entries[i]);
                        }
                        lrss.entries_list = feed.sortEntry();
                        feed.loaded++;
                    } else {
                        alert(result.error.code + " : " + result.error.message);
                    }
                }
            })(lrss.feed));
        }
    }

    /**
     * 読み込み
     */
    Feed.prototype.setNext = function () {
        if (this.index < lrss.entries_list.length && this.loaded == lrss.feed_list.length) {
            this.setEntry(lrss.entries_list[this.index]);
            this.index++;
        }
    }

    /**
     * 配置
     * @param {Object<Entry>} entry
     */
    Feed.prototype.setEntry = function (entry) {

        var container = document.createElement('div');
        container.className = "feed"

        var title = document.createElement('h2');
        title.className = 'feed-title-' + lrss.font_size;
        title.innerHTML = entry.title;
        container.appendChild(title);

        var published_date = document.createElement('h3');
        published_date.className = 'feed-date-' + lrss.font_size;
        var pdate = new Date(entry.publishedDate);
        var strdate = (pdate.getMonth() + 1) + '月' + pdate.getDate() + '日 ' + pdate.getHours() + '時' + pdate.getMinutes() + '分';
        published_date.innerHTML = strdate;
        container.appendChild(published_date);


        var content = document.createElement('p');
        content.className = 'feed-content-' + lrss.font_size;
        content.style.display = 'none';
        content.innerHTML = 'loading......';

        if (entry.link.match(/http:\/\/headlines.yahoo.co.jp\//g)) {
            $.get(entry.link, function (data) {
                data.responseText = data.responseText.replace(/\r\n/g, '\n');
                data.responseText = data.responseText.replace(/\n/g, '');
                content.innerHTML = data.responseText.match(/<p class="ynDetailText">.*<\/p>/g);
            });
        }
        else {
            content.innerHTML = entry.content;
        }

        container.appendChild(content);

        container.addEventListener('click', (function (feed, entry, content) {
            return function (event) {
                feed.openContent(entry, content);
            }
        })(this, entry, content));

        var plus_icon = document.createElement('i');
        plus_icon.className = 'icon-plus-sign';

        var plus = document.createElement('a');
        plus.className = 'feed-link';
        plus.appendChild(plus_icon);

        var link_icon = document.createElement('i');
        link_icon.className = 'icon-circle-arrow-right';

        var link = document.createElement('a');
        link.className = 'feed-link';
        link.href = entry.link;
        link.target = 'blank';
        link.appendChild(link_icon);

        var link_container = document.createElement('div');
        link_container.className = 'right';
        link_container.appendChild(plus);
        link_container.appendChild(link);
        container.appendChild(link_container);

        document.getElementById(LRSS.HTML_TARGET_ID).appendChild(container);

        var horizon = document.createElement('hr');
        document.getElementById(LRSS.HTML_TARGET_ID).appendChild(horizon);

        return true;
    }

    /**
     * 展開
     * @param {Object<Entry>} entry
     */
    Feed.prototype.openContent = function (entry, content) {

        if (entry.is_open_content) {
            return;
        }
        entry.is_open_content = true;

        content.style.display = 'block';

        // TODO
        //container.removeEventListener('click', arguments.callee, false);
    }

    /**
     * 並べ替え
     * @param {Object<Entry>} entry
     */
    Feed.prototype.sortEntry = function () {
        var source = lrss.entries_list;
        var result = new Array();
        var index = -1;

        result.unshift(source[0]);
        for (var i = 1; i < source.length; i++) {
            /* 位置決め */
            for (var j = 0; j < result.length; j++) {
                if (Date.parse(source[i].publishedDate) > Date.parse(result[j].publishedDate)) {
                    result.splice(j, 0, source[i]);
                    index = j;
                    break;
                }
            }
            /* 底辺挿入 */
            if (index < 0) {
                result.push(source[i]);
            }
            /* 初期化 */
            index = -1;
        }

        return result;
    }

    return Feed;
})();



/* set */
lrss.feed = new LRSS.Feed();