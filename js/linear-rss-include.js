/**
 * @fileoverview
 */

/**
 * 必要なスクリプトの読み込み
 * @param {Array<string>}
 */
(function () {
    document.open();
    var l = arguments.length;
    for (i = 0; i < l; i++) {
        document.write('<script type="text/javascript" src="' + arguments[i] + '"></script>');
    }
    document.close();
})(
'js/lib/jquery.xdomainajax.js',
'js/linear-rss-config.js',
'js/linear-rss-feed.js',
'js/linear-rss-main.js'
);
