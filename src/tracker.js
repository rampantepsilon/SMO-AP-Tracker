function add(location) {
    var currNum = 0
    var idHook = location + "Count";
    var endIndex = document.getElementById(idHook).innerText.indexOf("/");
    currNum = parseInt(document.getElementById(idHook).innerText.substring(0, endIndex - 1));

    switch (location) {
        case "moon":
            var newNum = currNum + 1;
            document.getElementById('moonCount').innerHTML = newNum + " / 75";
            break;
        case "cascade":
            var newNum = currNum + 1;
            document.getElementById('cascadeCount').innerHTML = newNum + " / 1";
            break;
        case "sand":
            var newNum = currNum + 1;
            document.getElementById('sandCount').innerHTML = newNum + " / 4";
            break;
        case "lake":
            var newNum = currNum + 1;
            document.getElementById('lakeCount').innerHTML = newNum + " / 1";
            break;
        case "wooded":
            var newNum = currNum + 1;
            document.getElementById('woodedCount').innerHTML = newNum + " / 4";
            break;
        case "metro":
            var newNum = currNum + 1;
            document.getElementById('metroCount').innerHTML = newNum + " / 3";
            break;
    }

    updateMoons();
}

function addCustom() {
    var moonCount = document.getElementById('customMoon').value;
    document.getElementById('moonCount').innerHTML = moonCount + " / 75";

    updateMoons();
}

function rem(location) {
    var idHook = location + "Count";
    var endIndex = document.getElementById(idHook).innerText.indexOf("/");
    var currNum = parseInt(document.getElementById(idHook).innerText.substring(0, endIndex - 1));

    switch (location) {
        case "moon":
            if (currNum != 0) {
                var newNum = currNum - 1;
            }
            else {
                var newNum = currNum;
            }
            document.getElementById('moonCount').innerHTML = newNum + " / 75";
            break;
        case "cascade":
            if (currNum != 0) {
                var newNum = currNum - 1;
            }
            else {
                var newNum = currNum;
            }
            document.getElementById('cascadeCount').innerHTML = newNum + " / 1";
            break;
        case "sand":
            if (currNum != 0) {
                var newNum = currNum - 1;
            }
            else {
                var newNum = currNum;
            }
            document.getElementById('sandCount').innerHTML = newNum + " / 4";
            break;
        case "lake":
            if (currNum != 0) {
                var newNum = currNum - 1;
            }
            else {
                var newNum = currNum;
            }
            document.getElementById('lakeCount').innerHTML = newNum + " / 1";
            break;
        case "wooded":
            if (currNum != 0) {
                var newNum = currNum - 1;
            }
            else {
                var newNum = currNum;
            }
            document.getElementById('woodedCount').innerHTML = newNum + " / 4";
            break;
        case "metro":
            if (currNum != 0) {
                var newNum = currNum - 1;
            }
            else {
                var newNum = currNum;
            }
            document.getElementById('metroCount').innerHTML = newNum + " / 3";
            break;
    }

    updateMoons();
}

function disconnect() {
    sessionStorage.setItem('host', "");
    sessionStorage.setItem('port', '');
    sessionStorage.setItem('game', '');
    sessionStorage.setItem('player', '');

    window.location.href = './server.html'
}