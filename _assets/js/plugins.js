// Avoid `console` errors in browsers that lack a console.
//解决的console调试的时候报错
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

(function () {
    Modernizr.load([{
        load: [
            '_assets/js/public/jquery/jquery-1.12.0.min.js'
            ,''
        ],
        callback : function ( url, result, key ) {
            // whenever this runs, your script has just executed.
            alert($("#aaaa").html());
        },

        complete: function () {
            
        }
    }]);
}());
