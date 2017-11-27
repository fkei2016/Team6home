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
    var testButton = document.getElementById("test");
    testButton.onclick = function () {
        window.location.href = '../HTML/test.html';
    }

}, false);