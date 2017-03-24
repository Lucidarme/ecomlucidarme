function postBooking(){
    var firstname = document.getElementById("firstname").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var bluecard = document.getElementById("bluecard").value;
    var nbplaces = document.getElementById("nbplaces").value;

    if(firstname ==="" || name===""||email===""||bluecard===""||nbplaces===""){
        var eventRoot = document.getElementById('error');
        eventRoot.innerHTML = "";
        var p = document.createElement('p');
        p.id="errortext"
        p.style = "color:red;";
        p.textContent = "Un des champs n'a pas été rempli";
        eventRoot.appendChild(p);
    }
    else{
        
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {//Call a function when the state changes.
                if(xhttp.readyState === 4 && xhttp.status === 204) {
                    MyFunction(this);
                }
            }

            var url = "rest/order";

            var eventid = GetURLParameter('eventid');
            var params = "firstname="+firstname
                            +"&name=" + name
                            +"&email=" + email
                            +"&bluecard=" + bluecard
                            +"&idevent=" + eventid
                            +"&nbplace=" + nbplaces;
            xhttp.open("POST", url);

            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send(params);

    }
}

function MyFunction(xml){
        alert("Votre réservation a bien été prise en compte.");
        window.location = "index.html";
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