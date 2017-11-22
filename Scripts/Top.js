document.addEventListener('DOMContentLoaded', function () {


    var img = new Image();
    img.src = '../Images/trident.png';
    img.class = '../CSS/css.css';
    img.onclick = function () {
        window.location.href = '../HTML/Top.html';
    };

    var textSize = document.createElement('a');
    textSize.href = "../CSS/css.css"

    //document.write("<br/>");
    //textSize.write("学校法人　河合塾学園");
    //document.write("<br/>");
    //
    //textWrite.write("トライデント コンピュータ専門学校");

    var list = document.getElementById('list');
    list.appendChild(img);


}, false);