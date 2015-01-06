/**
 * Created by lirui on 2014/10/22.
 */
require.config({
    paths: {
        domReady:'../../lib/domReady',
        zepto: '../zepto/zepto.min',
        gmu:'../zepto/gmu.min',
        touch:'../extend/touch',
        matchMedia:'../extend/matchMedia',
        event_ortchange:'../extend/event.ortchange',
        parseTpl:'../extend/parseTpl',
        event:'../core/event',
        widget:'../core/widget',
        Slider:'../widget/slider/slider',
        arrow:'../widget/slider/arrow',
        dots:'../widget/slider/dots',
        $touch:'../widget/slider/$touch',
        $autoplay:'../widget/slider/$autoplay',
        $lazyloadimg:'../widget/slider/$lazyloadimg',
        imgzoom:'../widget/slider/imgzoom',
        highlight:'../extend/highlight',
        Dialog:'../widget/dialog/dialog',
        $position:'../widget/dialog/$position'
    },
    shim:{
        "gmu":{
            dep:["zepto"],
            exports:"gmu"
        },
        "touch":{
            dep:["zepto"],
            exports:"touch"
        },
        "matchMedia":{
            dep:["zepto"],
            exports:"matchMedia"
        },
        "event_ortchange":{
            dep:["zepto"],
            exports:"event_ortchange"
        },
        "parseTpl":{
            dep:["zepto"],
            exports:"parseTpl"
        },
        "event":{
            dep:["zepto"],
            exports:"event"
        },
        "widget":{
            dep:["zepto"],
            exports:"widget"
        },
        "Slider":{
            dep:["zepto"],
            exports:"slider"
        },
        "arrow":{
            dep:["zepto"],
            exports:"arrow"
        },
        "dots":{
            dep:["zepto"],
            exports:"dots"
        },
        "$touch":{
            dep:["zepto"],
            exports:"$touch"
        },
        "$autoplay":{
            dep:["zepto"],
            exports:"$autoplay"
        },
        "$lazyloadimg":{
            dep:["zepto"],
            exports:"$lazyloadimg"
        },
        "imgzoom":{
            dep:["zepto"],
            exports:"imgzoom"
        },
        "highlight":{
            dep:["zepto"],
            exports:"highlight"
        },
        "Dialog":{
            dep:["zepto"],
            exports:"Dialog"
        },
        "$position":{
            dep:["zepto"],
            exports:"$position"
        }
    },
    baseUrl: "../js/lib/module/"
});