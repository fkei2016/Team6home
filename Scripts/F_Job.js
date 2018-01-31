document.addEventListener('DOMContentLoaded', function () {


    var cyberagentButton = document.getElementById("cyberagent");
    var cyberagentStudent = document.getElementById("cyberagentStudent");
    cyberagentButton.onclick = function ()
    {
        window.location.href = 'https://www.cyberagent.co.jp/service/game/';
    }

    var wonderplanetButton = document.getElementById("wonderplanet");
    wonderplanetButton.onclick = function ()
    {
        window.location.href = 'https://wonderpla.net/';
    }

    var coroplaButton = document.getElementById("coropla");
    coroplaButton.onclick = function ()
    {
        window.location.href = 'http://colopl.co.jp/index.php';
    }

    var aquriaButton = document.getElementById("aquria");
    aquriaButton.onclick = function () {
        window.location.href = 'http://www.aquria.co.jp';
    }

    var CybirdButton = document.getElementById("Cybird");
    CybirdButton.onclick = function () {
        window.location.href = 'https://www.cybird.co.jp/';
    }

    var dorasuButton = document.getElementById("dorasu");
    dorasuButton.onclick = function () {
        window.location.href = 'http://www.dorasu.com/';
    }

    var aquriaButton = document.getElementById("geechs");
    aquriaButton.onclick = function () {
        window.location.href = 'https://geechs.com/';
    }

    var CybirdButton = document.getElementById("Granzella");
    CybirdButton.onclick = function () {
        window.location.href = 'http://granzellagamefactory.co.jp/';
    }

    var dorasuButton = document.getElementById("Klab");
    dorasuButton.onclick = function () {
        window.location.href = 'https://www.klab.com/jp/';
    }

    var aquriaButton = document.getElementById("Stylagy");
    aquriaButton.onclick = function () {
        window.location.href = 'https://www.stylagy.co.jp/service/social_app.html';
    }

    var CybirdButton = document.getElementById("sun");
    CybirdButton.onclick = function () {
        window.location.href = 'http://www.sun-denshi.co.jp/';
    }

    var dorasuButton = document.getElementById("ThreeRings");
    dorasuButton.onclick = function () {
        window.location.href = 'https://www.threerings.jp/outline.html';
    }

    var dorasuButton = document.getElementById("YuKes");
    dorasuButton.onclick = function () {
        window.location.href = 'https://www.yukes.co.jp/';
    }




}, false);

$(function () {
    //$('#cyberagent').mouseover(function () {
    //    $('#cyberagentStudent').fadeOut("slow");
    //});
    $('#cyberagent').mouseover(function () {
        $(".cyberagentStudent").animate({ "opacity": "1", "marginLeft": "225px" });
    });
    $('#cyberagent').mouseout(function () {
        $(".cyberagentStudent").animate({ "opacity": "0", "marginLeft": "0px" });
    });

    $('#wonderplanet').mouseover(function () {
        $(".wonderplanetStudent").animate({ "opacity": "1", "marginLeft": "225px" });
    });
    $('#wonderplanet').mouseout(function () {
        $(".wonderplanetStudent").animate({ "opacity": "0", "marginLeft": "0px" });
    });

    $('#coropla').mouseover(function () {
        $(".coroplaStudent").animate({ "opacity": "1", "marginLeft": "225px" });
    });
    $('#coropla').mouseout(function () {
        $(".coroplaStudent").animate({ "opacity": "0", "marginLeft": "0px" });
    });


    $('#aquria').mouseover(function () {
        $(".aquriaStudent").animate({ "opacity": "1", "marginLeft": "225px" });
    });
    $('#aquria').mouseout(function () {
        $(".aquriaStudent").animate({ "opacity": "0", "marginLeft": "0px" });
    });


    $('#Cybird').mouseover(function () {
        $(".CybirdStudent").animate({ "opacity": "1", "marginLeft": "225px" });
    });
    $('#Cybird').mouseout(function () {
        $(".CybirdStudent").animate({ "opacity": "0", "marginLeft": "0px" });
    });


    $('#dorasu').mouseover(function () {
        $(".dorasuStudent").animate({ "opacity": "1", "marginLeft": "225px" });
    });
    $('#dorasu').mouseout(function () {
        $(".dorasuStudent").animate({ "opacity": "0", "marginLeft": "0px" });
    });


    $('#geechs').mouseover(function () {
        $(".geechsStudent").animate({ "opacity": "1", "marginLeft": "225px" });
    });
    $('#geechs').mouseout(function () {
        $(".geechsStudent").animate({ "opacity": "0", "marginLeft": "0px" });
    });


    $('#Granzella').mouseover(function () {
        $(".GranzellaStudent").animate({ "opacity": "1", "marginLeft": "225px" });
    });
    $('#Granzella').mouseout(function () {
        $(".GranzellaStudent").animate({ "opacity": "0", "marginLeft": "0px" });
    });


    $('#Klab').mouseover(function () {
        $(".KlabStudent").animate({ "opacity": "1", "marginLeft": "225px" });
    });
    $('#Klab').mouseout(function () {
        $(".KlabStudent").animate({ "opacity": "0", "marginLeft": "0px" });
    });


    $('#Stylagy').mouseover(function () {
        $(".StylagyStudent").animate({ "opacity": "1", "marginLeft": "225px" });
    });
    $('#Stylagy').mouseout(function () {
        $(".StylagyStudent").animate({ "opacity": "0", "marginLeft": "0px" });
    });

    $('#sun').mouseover(function () {
        $(".sunStudent").animate({ "opacity": "1", "marginLeft": "225px" });
    });
    $('#sun').mouseout(function () {
        $(".sunStudent").animate({ "opacity": "0", "marginLeft": "0px" });
    });

    $('#ThreeRings').mouseover(function () {
        $(".ThreeRingsStudent").animate({ "opacity": "1", "marginLeft": "225px" });
    });
    $('#ThreeRings').mouseout(function () {
        $(".ThreeRingsStudent").animate({ "opacity": "0", "marginLeft": "0px" });
    });

    $('#YuKes').mouseover(function () {
        $(".YuKesStudent").animate({ "opacity": "1", "marginLeft": "225px" });
    });
    $('#YuKes').mouseout(function () {
        $(".YuKesStudent").animate({ "opacity": "0", "marginLeft": "0px" });
    });
});