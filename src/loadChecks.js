for (i in data) {
    var startIndex = data[i].name.indexOf("(");
    var endIndex = data[i].name.indexOf(")");

    var kingdom = data[i].name.substring(startIndex + 1, endIndex);
    console.log(kingdom);

    switch (kingdom) {
        case "Cap":
            document.getElementById("cap").innerHTML += "<div class='checkValue' id='check" + i + "'>" + (data[i].name.substring(endIndex + 2)) + "</div>";
            break;
        case "Cascade":
            document.getElementById("cascade").innerHTML += "<div class='checkValue' id='check" + i + "'>" + (data[i].name.substring(endIndex + 2)) + "</div>";
            break;
        case "Sand":
            document.getElementById("sand").innerHTML += "<div class='checkValue' id='check" + i + "'>" + (data[i].name.substring(endIndex + 2)) + "</div>";
            break;
        case "Lake":
            document.getElementById("lake").innerHTML += "<div class='checkValue' id='check" + i + "'>" + (data[i].name.substring(endIndex + 2)) + "</div>";
            break;
        case "Wooded":
            document.getElementById("wooded").innerHTML += "<div class='checkValue' id='check" + i + "'>" + (data[i].name.substring(endIndex + 2)) + "</div>";
            break;
        case "Cloud":
            document.getElementById("cloud").innerHTML += "<div class='checkValue' id='check" + i + "'>" + (data[i].name.substring(endIndex + 2)) + "</div>";
            break;
        case "Lost":
            document.getElementById("lost").innerHTML += "<div class='checkValue' id='check" + i + "'>" + (data[i].name.substring(endIndex + 2)) + "</div>";
            break;
        case "Metro":
            document.getElementById("metro").innerHTML += "<div class='checkValue' id='check" + i + "'>" + (data[i].name.substring(endIndex + 2)) + "</div>";
            break;
    }
}