function postBooking(){
    var firstname = document.getElementById("firstname").value;
    var name = document.getElementById("name").value;
    var adress = document.getElementById("adress").value;
    var phone = document.getElementById("phone").value;
    var nbplaces = document.getElementById("nbplaces").value;

    if(firstname ==="" || name===""||adress===""||phone===""||nbplaces===""){
        var eventRoot = document.getElementById('error');
        eventRoot.innerHTML = "";
        var p = document.createElement('p');
        p.id="errortext"
        p.style = "color:red;";
        p.textContent = "Un des champs n'a pas été rempli";
        eventRoot.appendChild(p);
    }
    else{
        alert("Votre réservation a bien été prise en compte.");
        window.location = "index.html";
    }
}