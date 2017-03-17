var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
var eventid = GetURLParameter('eventid');
var url = "rest/evenements/" + eventid;

xhttp.open("GET", url, true);
xhttp.send();

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    var owner = xmlDoc.getElementsByTagName("owner")[0].childNodes[0].nodeValue;
    var name = xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    var imageLink = xmlDoc.getElementsByTagName("imageLink")[0].childNodes[0].nodeValue;
    var price = xmlDoc.getElementsByTagName("price")[0].childNodes[0].nodeValue;
    var description = xmlDoc.getElementsByTagName("description")[0].childNodes[0].nodeValue;
    var type = xmlDoc.getElementsByTagName("type")[0].childNodes[0].nodeValue;
    
    document.getElementById("annonceurId").textContent = owner;
    document.getElementById("name").value = name;
    document.getElementById("price").value = price;
    document.getElementById("description").value = description;
    document.getElementById("type").value = type;
    document.getElementById("imageLink").value = imageLink;
}


function GetURLParameter(sParam){
        var sPageURL = window.location.search.substring(1);

        var sURLVariables = sPageURL.split('&');

        for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) {                                
                return sParameterName[1];
            }
        }
        return "";

}

