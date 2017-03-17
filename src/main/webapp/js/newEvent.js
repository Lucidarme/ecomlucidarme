var name = document.getElementById("name").value;
var price = document.getElementById("price").value;
var type = document.getElementById("type").value;
var description = document.getElementById("description").value;
var dates = document.getElementById("dates").value;
var imageLink = document.getElementById("imageLink").value;

if(name ==="" || price===""||type===""||description===""||dates===""||imageLink===""){
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

    var url = "rest/evenements";

    var owner = GetURLParameter('owner');

    var params = "name="+name+"&price="+price+"&type="+type+
            "&imageLink="+imageLink + 
            "&description="+description + " dates : " + dates +
            "&date=2017-01-01T00:00:00" + "&owner="+owner+"&isvalid=0";
    xhttp.open("POST", url);

        //Send the proper header information along with the request
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(params);
}
                


        
function MyFunction(xml){
    alert("Merci, un administrateur validera votre demande avec une des dates\n\
        que vous avez proposé.");
    window.location = 'espacePro.html?id=' + owner;
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

