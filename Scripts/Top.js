document.addEventListener('DOMContentLoaded', function () {

    var img = document.getElementById("topImg");

    img.onclick = function () {
        window.location.href = '../HTML/Top.html';
    };

    var introButton = document.getElementById("intro");
    introButton.onclick = function () {
        window.location.href = '../HTML/Introduce.html';
    }
    var jobButton = document.getElementById("job");
    jobButton.onclick = function () {
        window.location.href = '../HTML/F_Job.html';
    }
    var testButton = document.getElementById("life");
    testButton.onclick = function () {
        window.location.href = '../HTML/Campus_life.html';
    }

    var topButton = document.getElementById("top");
    topButton.onclick = function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

}, false);