var xmlHttp = new XMLHttpRequest();
var numberOfColumns = 2;
var htmlCode = "";
var response;

$(document).ready(function () {
    var send = "/php/hook.php";
    xmlHttp.open("GET", send, true);
    xmlHttp.send(null);
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 2) {
            alert(xmlHttp.responseText);
            response = xmlHttp.responseText.split("~");
            htmlCode += '<tr>';
            for (var i = 0; i <response.length; i++) {
                htmlCode += '<td id="gallery_cell">';
                htmlCode += '<a href="' + '/assets/Renders/' + response[i] + '">';
                htmlCode += '<img width="25%" src="Renders/' + response[i] + '" id="image_thumbnail"/>';
                htmlCode += '</a>';
                htmlCode += '</td>';
                if (((i + 1) % numberOfColumns) == 0) {
                    htmlCode += '<tr></tr>';
                }
            }
            htmlCode += '</tr>';
            document.getElementById('gallery').innerHTML = htmlCode;
        }
    }
});