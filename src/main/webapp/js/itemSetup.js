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

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                myFunction(this);
            }
        };
        xhttp.open("GET", "rest/evenements/" + GetURLParameter('eventid'), true);
        xhttp.send();
        
        function myFunction(xml) {
            var xmlDoc = xml.responseXML;


            
                var id = xmlDoc.getElementsByTagName("id")[0].childNodes[0].nodeValue;
                var imageLink = xmlDoc.getElementsByTagName("imageLink")[0].childNodes[0].nodeValue;
                var price = xmlDoc.getElementsByTagName("price")[0].childNodes[0].nodeValue;
                var description = xmlDoc.getElementsByTagName("description")[0].childNodes[0].nodeValue;
                var name = xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
                var date = new Date(xmlDoc.getElementsByTagName("date")[0].childNodes[0].nodeValue);

                document.getElementById("productName").innerHTML = name;
                document.getElementById("description").innerHTML = description;
                document.getElementById("price").innerHTML = price;
                document.getElementById("imageLink").src = imageLink;

                document.getElementById("info1").textContent = name;
                document.getElementById("info2").textContent = 
                        "le " + date.toISOString().substring(0, 16).replace(/T/g," à ") + "h";
                document.getElementById("info3").textContent = price;

        }
        