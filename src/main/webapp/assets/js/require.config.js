require.config({
    // 解析过程是baseUrl + paths
    // baseUrl : 'assets/js', // 从assets/js目录下加载模块ID

    // 如果不想使用baseUrl + paths的解析过程，只需要模块ID满足如下条件之一即可：
    // 1、以".js"结尾
    // 2、以"/"开头
    // 3、包含 URL 协议, 如 "http:" or "https:"
    paths : {
        'css' : 'require/css', // 模块ID，css是require/css的简写。
        'text' : 'require/text',
        'cs' : 'require/cs',
        'jquery' : 'jquery/jquery-2.1.1.min',
        'bootstrap' : '../bootstrap/js/bootstrap.min',
        'bootstrap-table' : 'bootstrap/bootstrap-table',
        'underscore' : 'underscore/underscore'
    },

    shim : {
        underscore : {
            exports : '_'
        },

        cs : {
            exports : 'cs'
        },

        bootstrap : {
            deps : [ 'jquery' ] // 依赖说明，如果不指明依赖关系，加载可能报错。因为RequireJS会以异步无序的方式加载这些库。
        },

        'bootstrap-table' : {
            deps : [ 'jquery', 'bootstrap' ]
        },

        jquery : {
            exports : 'jQuery'
        }
    },
    waitSeconds : 60
});