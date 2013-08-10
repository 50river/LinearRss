/**
 * @fileoverview
 * メインループ
 * 初期化及びループ制御
 */

/** namespace */
var LRSS;
if (!LRSS) LRSS = {};



/** @define {string} バージョン */
LRSS.VERSION = " ver 0.0.6";

LRSS.LOCALSTORAGE_FONT_SIZE = 'font-size';



/* グローバル変数 */
var lrss;
if (!lrss) lrss = {};

lrss.t = 0;
lrss.font_size = null;



/**
 * Main of Mola SYSTEM
 * @constructor
 */
LRSS.Main = (function () {

    /**
     * コンストラクタ
     */
    function Main() {
        this.state = '';

        this.isWin9X = (navigator.appVersion.toLowerCase().indexOf('windows 98') + 1);
        this.isIE = (navigator.appName.toLowerCase().indexOf('internet explorer') + 1 ? 1 : 0);
        this.isOpera = (navigator.userAgent.toLowerCase().indexOf('opera') + 1 ? 1 : 0);
        if (this.isOpera) this.isIE = false;
        this.isSafari = (navigator.appVersion.toLowerCase().indexOf('safari') + 1 ? 1 : 0);

        this.screen_width = 0;
        this.screen_height = 0;
    }

    /**
     * 初期化
     */
    Main.prototype.initialize = function () {
        /* 状態の初期化 */
        this.state = 'boot';
        lrss.feed.initialize();

        this.getScreenSize();

        setInterval(this.getPosition, LRSS.CHECK_POSITION_INTERVAL);

        this.setFontSize();
        this.setButton();
    }

    /**
     * 文字の大きさ
     */
    Main.prototype.setFontSize = function () {
        /* ブラウザの設定を読み込む */
        if (window.localStorage.getItem(LRSS.LOCALSTORAGE_FONT_SIZE) != null) {
            lrss.font_size = window.localStorage.getItem(LRSS.LOCALSTORAGE_FONT_SIZE);
        }
        else {
            if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('Android') > 0) {
                window.localStorage.setItem(LRSS.LOCALSTORAGE_FONT_SIZE, 'small');
            }
            else {
                window.localStorage.setItem(LRSS.LOCALSTORAGE_FONT_SIZE, 'large');
            }
        }

        /* 文字サイズ小 */
        document.getElementById('button-font-small').addEventListener('click', (function () {
            return function (event) {
                /* localStorageSet */
                window.localStorage.setItem(LRSS.LOCALSTORAGE_FONT_SIZE, 'small');
                lrss.font_size = 'small';
                /* classChange */
                var elements;
                /* title */
                elements = document.querySelectorAll('.feed-title-large');
                console.log(elements);
                for (var i = 0; i < elements.length; i++) {
                    elements[i].className = 'feed-title-small';
                }
                /* date */
                elements = document.querySelectorAll('.feed-date-large');
                for (var i = 0; i < elements.length; i++) {
                    elements[i].className = 'feed-date-small';
                }
                /* content */
                elements = document.querySelectorAll('.feed-content-large');
                for (var i = 0; i < elements.length; i++) {
                    elements[i].className = 'feed-content-small';
                }
            }
        })());

        /* 文字サイズ大 */
        document.getElementById('button-font-large').addEventListener('click', (function () {
            return function (event) {
                /* localStorageSet */
                window.localStorage.setItem(LRSS.LOCALSTORAGE_FONT_SIZE, 'large');
                lrss.font_size = 'large';
                /* classChange */
                var elements;
                /* title */
                elements = document.querySelectorAll('.feed-title-small');
                for (var i = 0; i < elements.length; i++) {
                    elements[i].className = 'feed-title-large';
                }
                /* date */
                elements = document.querySelectorAll('.feed-date-small');
                for (var i = 0; i < elements.length; i++) {
                    elements[i].className = 'feed-date-large';
                }
                /* content */
                elements = document.querySelectorAll('.feed-content-small');
                for (var i = 0; i < elements.length; i++) {
                    elements[i].className = 'feed-content-large';
                }
            }
        })());
    }

    /**
     * ボタンのセット
     */
    Main.prototype.setButton = function () {
        document.getElementById('button-reload').addEventListener('click', (function () {
            return function (event) {
                location.reload();
            }
        })());
    }

    /**
     * スクロール位置の取得
     */
    Main.prototype.getPosition = function () {
        var obj = new Object();
        obj.x = document.documentElement.scrollLeft || document.body.scrollLeft;
        obj.y = document.documentElement.scrollTop || document.body.scrollTop;
        obj.dx = document.documentElement.scrollWidth || document.body.scrollWidth;
        obj.dy = document.documentElement.scrollHeight || document.body.scrollHeight;
        
        if (obj.dy - obj.y - lrss.main.screen_height < lrss.main.screen_height) {
            lrss.feed.setNext();
        }
    }

    /**
     * ウィンドウサイズの取得
     */
    Main.prototype.getScreenSize = function () {
        var obj = new Object();
        if (!this.isSafari && !this.isOpera) {
            obj.x = document.documentElement.clientWidth || document.body.clientWidth || document.body.scrollWidth;
            obj.y = document.documentElement.clientHeight || document.body.clientHeight || document.body.scrollHeight;
        } else {
            obj.x = window.innerWidth;
            obj.y = window.innerHeight;
        }
        this.screen_width = obj.x;
        this.screen_height = obj.y;
    }

    return Main;
})();



/* set */
document.title += LRSS.VERSION;
lrss.main = new LRSS.Main();
lrss.main.initialize();

/* リサイズ */
window.onresize = (function () {
    return function (e) {
        lrss.main.getScreenSize();
    }
})();

