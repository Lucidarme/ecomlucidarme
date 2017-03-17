var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
    else{
        var element =  document.getElementById('errortext');
        if (typeof(element) != 'undefined' && element != null){}
        else{
            var eventRoot = document.getElementById('error');
            var p = document.createElement('p');
            p.id="errortext"
            p.style = "color:red;";
            p.textContent = "Nom ou mot de passe faux";
            eventRoot.appendChild(p);
        }
    }
};
var name = document.getElementById("login-name").value;
var pass = document.getElementById("login-pass").value;

var url = "rest/user/connect/" + name + "&" + pass;


xhttp.open("GET", url, true);
xhttp.send();

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    var id = xmlDoc.getElementsByTagName("id")[0].childNodes[0].nodeValue;
    var role = xmlDoc.getElementsByTagName("role")[0].childNodes[0].nodeValue;
    
    switch(role){
        case "admin": window.location.href = "espaceAdmin.html?id=" + id;
            break;
        case "user": window.location.href = "espacePro.html?id=" + id;
            break;
        default: window.location.href = "index.html";
    }
    
}