/*-----------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded',
    function () {


        











        var anchor = document.createElement("a")
        anchor.href = "http://computer.trident.ac.jp/";

        var text = document.createTextNode(anchor);
        anchor.appendChild(text);

        var anchor2 = document.createElement("hr")

        var list = document.getElementById("id_div_introduce");
        list.appendChild(anchor);
        list.appendChild(anchor2);

    }, false);
/*-----------------------------------------------------------------*/