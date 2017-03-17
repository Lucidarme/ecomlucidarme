var name = document.getElementById("name").value;
var price = document.getElementById("price").value;
var type = document.getElementById("type").value;
var description = document.getElementById("description").value;
var date = document.getElementById("date").value;
var imageLink = document.getElementById("imageLink").value;
var owner = document.getElementById("annonceurId").textContent;

if(name ==="" || price===""||type===""||description===""||date===""||imageLink===""){
    var eventRoot = document.getElementById('error');
    eventRoot.innerHTML = "";
    var p = document.createElement('p');
    p.id="errortext"
    p.style = "color:red;";
    p.textContent = "Certain champs sont encore vides";
    eventRoot.appendChild(p);
}else{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {//Call a function when the state changes.
        if(xhttp.readyState === 4 && xhttp.status === 204) {
            MyFunction(this);
        }
    }
    var eventid = GetURLParameter('eventid');
    var url = "rest/evenements/modify/eventid=" + eventid;
    
    var params = "name="+name+"&price="+price+"&type="+type+
            "&imageLink="+imageLink + 
            "&description="+description +
            "&date=" + date + "&owner="+owner+"&isvalid=true";
    xhttp.open("PUT", url);

        //Send the proper header information along with the request
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(params);

}


function MyFunction(xml){
    alert("L'évenement à bien été enregistré. Il va à présent être publié.");
    window.location = 'index.html';
}


function GetURLParameter(sParam)
            {
                var sPageURL = window.location.search.substring(1);

                var sURLVariables = sPageURL.split('&');

                for (var i = 0; i < sURLVariables.length; i++) 
                {
                    var sParameterName = sURLVariables[i].split('=');
                    if (sParameterName[0] == sParam) 
                    {                                
                        return sParameterName[1];
                    }
                }
}