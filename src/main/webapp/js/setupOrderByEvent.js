var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        setupEvent(this);
    }
};
xhttp.open("GET", "rest/evenements/" + GetURLParameter('eventid'), true);
xhttp.send();

var hreq = new XMLHttpRequest();
hreq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        setupOrders(this);
    }
};
hreq.open("GET", "rest/order/eventid=" + GetURLParameter('eventid'), true);
hreq.send();


function setupEvent(xml){
    var xmlDoc = xml.responseXML;

    var price = xmlDoc.getElementsByTagName("price")[0].childNodes[0].nodeValue;
    var name = xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    
    document.getElementById("eventname").innerHTML = name;
    document.getElementById("eventprice").innerHTML = price;
    

}



function setupOrders(xml){
    var xmlDoc = xml.responseXML;
    if(xmlDoc.getElementsByTagName("id").length === 0){
       document.getElementById("orderContainer").innerHTML +=                     
                '<div class="row">'
                            +'<div class="col-md-12">'
                                +'<p>Il n\'y a pas encore de réservation pour cet évenement.</p>'
                            +'</div>'
                        +'</div>'; 
    }
    for(i = 0; i < xmlDoc.getElementsByTagName("id").length; i++){
        var name = xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue;
        var firstname = xmlDoc.getElementsByTagName("firstname")[i].childNodes[0].nodeValue;
        var email = xmlDoc.getElementsByTagName("email")[i].childNodes[0].nodeValue;
        var nbplace = xmlDoc.getElementsByTagName("nbplace")[i].childNodes[0].nodeValue;
        
        document.getElementById("orderContainer").innerHTML +=                     
                '<div class="row">'
                            +'<div class="col-md-12">'
                                +'<label> <font size="4">' + firstname + ' ' + name +'</font> </label>'
                                +'<label class="pull-right"> <font size="4">'+nbplace+' places</font> </label>'
                                +'<p>'+email+'</p>'
                            +'</div>'
                        +'</div>';
        if(i !== (xmlDoc.getElementsByTagName("id").length) -1)
            document.getElementById("orderContainer").innerHTML += '<hr>';
    }
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
