var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
var eventtype = GetURLParameter('eventtype');
var url;
if(eventtype === "")
    url = "rest/evenements";
else
    url = "rest/evenements/type/" + eventtype;

xhttp.open("GET", url, true);
xhttp.send();

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    if(eventtype === "")
        document.getElementById("all").className = "list-group-item active";
    else
        document.getElementById(eventtype).className = "list-group-item active";
    
    document.getElementById('eventsContainer').innerHTML ="";
    
    var date1 = new Date(document.getElementById("date1").value);
    var date2 = new Date(document.getElementById("date2").value);
    for(i = 0; i < xmlDoc.getElementsByTagName("id").length; i++){
        
        var eventdate = new Date(xmlDoc.getElementsByTagName("date")[i].childNodes[0].nodeValue);
        var isvalid = xmlDoc.getElementsByTagName("isvalid")[i].childNodes[0].nodeValue;
        if( date1 <= eventdate 
            && eventdate <= date2 && isvalid === "true"){

        
            duplicate(i,
                    xmlDoc.getElementsByTagName("id")[i].childNodes[0].nodeValue,
                    xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue,
                    xmlDoc.getElementsByTagName("imageLink")[i].childNodes[0].nodeValue,
                    xmlDoc.getElementsByTagName("price")[i].childNodes[0].nodeValue,
                    xmlDoc.getElementsByTagName("description")[i].childNodes[0].nodeValue,
                    "le " + eventdate.toISOString().substring(0, 16).replace(/T/g," à ") + "h"
                    );
            }
    }

}


function duplicate(i, id, name, imageLink, price, description, date) {

    var div = document.createElement('div');
    div.id = 'event' + i;
    div.className = "col-sm-4 col-lg-4 col-md-4";
    var div2 = document.createElement('div');
    div2.className = "thumbnail";
    var img = document.createElement('img');
    img.src=imageLink;
    img.alt="";
    var div3 = document.createElement('div');
    div3.className = "caption";
    var h4_1 = document.createElement('h4');
    h4_1.className = "pull-right";

    h4_1.textContent = price;
    div3.appendChild(h4_1);
    var h4_2 = document.createElement('h4');
    var a_1 = document.createElement('a');
    a_1.href = "item.html?eventid=" + id;
    a_1.id="product" + i;
    a_1.textContent=name;
    h4_2.appendChild(a_1);
    div3.appendChild(h4_2);
    var p_1 = document.createElement('p');
    p_1.textContent = description;
    div3.appendChild(p_1);

    
    var div4 = document.createElement('div');
    div4.className = "ratings";
    var p_2 = document.createElement('p');
    p_2.className ="pull-right";
    p_2.textContent = date;
    div4.appendChild(p_2);
    var p_3 = document.createElement('p');

    var span5 = document.createElement('span');
    span5.className ="glyphicon glyphicon-star";
    p_3.appendChild(span5);
    
    div4.appendChild(p_3);

    div2.appendChild(img);
    div2.appendChild(div3);
    div2.appendChild(div4);
    div.appendChild(div2);
    var eventRoot = document.getElementById('eventsContainer');
    eventRoot.appendChild(div);
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
