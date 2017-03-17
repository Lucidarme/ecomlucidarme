

if(document.getElementById("password1").value === document.getElementById("password2").value
        && document.getElementById("password1").value !== ""){
    var xhtr = new XMLHttpRequest();
    xhtr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            checkIfNameExist(this);
        }
    };
    var name = document.getElementById("name").value;
    

    xhtr.open("GET", "rest/user/name=" + name, true);
    xhtr.send();
    

}
else{
    var eventRoot = document.getElementById('error');
    eventRoot.innerHTML = "";
    var p = document.createElement('p');
    p.id="errortext"
    p.style = "color:red;";
    p.textContent = "les mots de passes ne sont pas identiques";
    eventRoot.appendChild(p);
}


function Post(){
        
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {//Call a function when the state changes.
        if(xhttp.readyState === 4 && xhttp.status === 204) {
            MyFunction(this);
        }
    }
    
    var url = "rest/user";
    var name = document.getElementById("name").value;
    var password = document.getElementById("password1").value;
    var role = "user";
    var email = document.getElementById("email").value;
    var adress = document.getElementById("adress").value;
    var params = "name="+name+"&password="+password+"&role="+role+"&email="+email+"&adress="+adress;
    xhttp.open("POST", url);

    //Send the proper header information along with the request
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(params);
}

function checkIfNameExist(xml) {
    var xmlDoc = xml.responseXML;
    if (xmlDoc.documentElement.childNodes.length !== 0){
        var eventRoot = document.getElementById('error');
        eventRoot.innerHTML = "";
        var p = document.createElement('p');
        p.id="errortext";
        p.style = "color:red;";
        p.textContent = "Ce nom existe deja, veuillez en choisir un autre";
        eventRoot.appendChild(p);
    }
    else{
        Post();
    }
}

function MyFunction(xml){
    var xhtr = new XMLHttpRequest();
    xhtr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            SendToEspacePro(this);
        }
    };
    var name = document.getElementById("name").value;
    

    xhtr.open("GET", "rest/user/name=" + name, true);
    xhtr.send();
}

function SendToEspacePro(xml){
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
