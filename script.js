function generatelist()
 {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            var response = JSON.parse(this.responseText);
            var getoutput = "";
            for (var i = 0; i < response.length; i++)
             {
                getoutput += "<tr>";
                getoutput += "<th scope=\"row\">" + response[i].serialNumber +"</th>";
                getoutput += "<td>" + response[i].name +"</td>";
                getoutput += "<td>" + response[i].quantity +"</td>";
                getoutput += "<td>" + response[i].unit +"</td>";
                getoutput += "<td>" + response[i].department +"</td>";
                getoutput += "<td>" + response[i].notes +"</td>";
                getoutput += "</tr>";
            }
            document.querySelector("tbody").innerHTML = getoutput;
        }
    };

    xhttp.open("GET", "./list.json", true);
    xhttp.send();
}