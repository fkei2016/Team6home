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
    //textSize.write("�w�Z�@�l�@�͍��m�w��");
    //document.write("<br/>");
    //
    //textWrite.write("�g���C�f���g �R���s���[�^���w�Z");

    var list = document.getElementById('list');
    list.appendChild(img);


}, false);