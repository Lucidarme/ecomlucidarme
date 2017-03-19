var xhttp = new XMLHttpRequest();



var owner = GetURLParameter('id');
var eventvalid = GetURLParameter('eventvalid');
if(eventvalid === "true")
    url = "rest/evenements/isvalid=true";
else
    url = "rest/evenements/isvalid=false";


xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this, eventvalid);
    }
};
xhttp.open("GET", url, true);
xhttp.send();

var xhtr = new XMLHttpRequest();
xhtr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        userLoad(this);
    }
};


url = "rest/user/" + owner;

xhtr.open("GET", url, true);
xhtr.send();



function userLoad(xml){
    var xmlDoc = xml.responseXML;
    document.getElementById('name').textContent = xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    document.getElementById('email').textContent = xmlDoc.getElementsByTagName("email")[0].childNodes[0].nodeValue;
    document.getElementById('adress').textContent = xmlDoc.getElementsByTagName("adress")[0].childNodes[0].nodeValue;

}





function myFunction(xml, eventvalid) {
    var xmlDoc = xml.responseXML;

    
    document.getElementById('eventsContainer').innerHTML ="";
    
    var textDescriptif;
    if(eventvalid !=="true"){
        textDescriptif = "Ces evenements n'ont pas encore été validé. Vous pouvez visualiser les dates proposés par l'organisateur dans la description. Lors de la validation, pensez a supprimer ces dates de la description, et d'ajouter la date que vous souhaitez dans l'espace prévu a cet effet.";
        document.getElementById("novalidevent").className = "list-group-item active";
    }
    else{
        textDescriptif ="Ces evenements sont actuellement publiés. Vous pouvez modifier et supprimer ces evenements."
        document.getElementById("validevent").className = "list-group-item active";

    }
    
    var descriptionContainer = document.getElementById('descriptionContainer');
    var p_4 = document.createElement('p');
    p_4.textContent=textDescriptif;
    descriptionContainer.appendChild(p_4);

    for(i = 0; i < xmlDoc.getElementsByTagName("id").length; i++){
        
        var eventdate = new Date(xmlDoc.getElementsByTagName("date")[i].childNodes[0].nodeValue);

        

        if(eventvalid === "false")
            duplicateFalse(i,
                        xmlDoc.getElementsByTagName("id")[i].childNodes[0].nodeValue,
                        xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue,
                        xmlDoc.getElementsByTagName("imageLink")[i].childNodes[0].nodeValue,
                        xmlDoc.getElementsByTagName("price")[i].childNodes[0].nodeValue,
                        xmlDoc.getElementsByTagName("description")[i].childNodes[0].nodeValue,
                        "le " + eventdate.toISOString().substring(0, 16).replace(/T/g," à ") + "h"
                        );
        else
             duplicateTrue(i,
                        xmlDoc.getElementsByTagName("id")[i].childNodes[0].nodeValue,
                        xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue,
                        xmlDoc.getElementsByTagName("imageLink")[i].childNodes[0].nodeValue,
                        xmlDoc.getElementsByTagName("price")[i].childNodes[0].nodeValue,
                        xmlDoc.getElementsByTagName("description")[i].childNodes[0].nodeValue,
                        "le " + eventdate.toISOString().substring(0, 16).replace(/T/g," à ") + "h"
                        );
    }

}


function duplicateFalse(i, id, name, imageLink, price, description, date) {

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
    var a_2 = document.createElement('a');
    a_2.href="validEvent.html?eventid=" + id;
    var input = document.createElement('input');
    input.className="pull-right";
    input.type="button";
    input.value="Valider";
    input.id="valider" +i;
    a_2.appendChild(input);
    div4.appendChild(a_2);
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



function duplicateTrue(i, id, name, imageLink, price, description, date) {

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
    var a_2 = document.createElement('a');
    a_2.href="validEvent.html?eventid=" + id + "&datevalid=true";
    var input = document.createElement('input');
    input.className="pull-right";
    input.type="button";
    input.value="Modifier";
    input.id="modifier" +i;
    a_2.appendChild(input);
    var a_3 = document.createElement('a');
    a_3.onclick=function(){
        deleteEvent(id);
    };
    var input2 = document.createElement('input');
    input2.className="pull-right";
    input2.type="button";
    input2.value="Supprimer";
    input2.id="delete" +i;
    a_3.appendChild(input2);
    div4.appendChild(a_2);
    div4.appendChild(a_3);
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

function filterEventValid(valid){
    var owner = GetURLParameter('id');
    window.location = "espaceAdmin.html?id=" + owner + "&eventvalid=" + valid;
}

function deleteEvent(id){
    var xhttp = new XMLHttpRequest();

    url = "rest/evenements/delete/eventbyid="+id;

    var r = confirm("Voulez vous vraiment supprimer cet évenement?");
    if (r == true) {
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && (this.status == 200 || this.status == 204)) {
                alert("L'évenement à bien été supprimé");
                location.reload(); 
            }
        };
        xhttp.open("DELETE", url, true);
        xhttp.send();
    }



}