var moonCount
var cascadeCount
var sandCount
var lakeCount
var woodedCount
var metroCount

//Get indexes
var moonIndex
var cascadeIndex
var sandIndex
var lakeIndex
var woodedIndex
var metroIndex

//Get Values
var moonValue
var cascadeValue
var sandValue
var lakeValue
var woodedValue
var metroValue

for (i in data) {
    if (data[i].requires != '0') {
        document.getElementById("check" + i).style.display = 'none';
    }
}

function updateNums() {
    moonCount = document.getElementById('moonCount').innerText;
    cascadeCount = document.getElementById('cascadeCount').innerText;
    sandCount = document.getElementById('sandCount').innerText;
    lakeCount = document.getElementById('lakeCount').innerText;
    woodedCount = document.getElementById('woodedCount').innerText;
    metroCount = document.getElementById('metroCount').innerText;

    //Get indexes
    moonIndex = moonCount.indexOf("/");
    cascadeIndex = cascadeCount.indexOf("/");
    sandIndex = sandCount.indexOf("/");
    lakeIndex = lakeCount.indexOf("/");
    woodedIndex = woodedCount.indexOf("/");
    metroIndex = metroCount.indexOf("/");

    //Get Values
    moonValue = parseInt(moonCount.substring(0, (moonIndex - 1)));
    cascadeValue = parseInt(cascadeCount.substring(0, (moonIndex - 1)));
    sandValue = parseInt(sandCount.substring(0, (moonIndex - 1)));
    lakeValue = parseInt(lakeCount.substring(0, (moonIndex - 1)));
    woodedValue = parseInt(woodedCount.substring(0, (moonIndex - 1)));
    metroValue = parseInt(metroCount.substring(0, (moonIndex - 1)));
}

function updateMoons() {
    updateNums();
    if (moonValue >= 5) {
        for (i in data) {
            if (data[i].requires == 'moon5' || data[i].requires == '0') {
                document.getElementById("check" + i).style.display = 'block';
            }
        }
    }
    if (moonValue < 5) {
        for (i in data) {
            if (data[i].requires == 'moon5') {
                document.getElementById("check" + i).style.display = 'none';
            }
        }
    }
    if (cascadeValue == 1) {
        for (i in data) {
            if (data[i].requires == 'cascade1') {
                document.getElementById("check" + i).style.display = 'block';
            }
        }
    }
    if (cascadeValue != 1) {
        for (i in data) {
            if (data[i].requires == 'cascade1') {
                document.getElementById("check" + i).style.display = 'none';
            }
        }
    }
    if (sandValue >= 1) {
        for (i in data) {
            if (data[i].requires == 'sand1') {
                document.getElementById("check" + i).style.display = 'block';
            }
        }
    }
    if (sandValue == 0) {
        for (i in data) {
            if (data[i].requires == 'sand1') {
                document.getElementById("check" + i).style.display = 'none';
            }
        }
    }
    if (sandValue >= 2) {
        for (i in data) {
            if (data[i].requires == 'sand2') {
                document.getElementById("check" + i).style.display = 'block';
            }
        }
    }
    if (sandValue < 2) {
        for (i in data) {
            if (data[i].requires == 'sand2') {
                document.getElementById("check" + i).style.display = 'none';
            }
        }
    }
    if (sandValue >= 3) {
        for (i in data) {
            if (data[i].requires == 'sand3') {
                document.getElementById("check" + i).style.display = 'block';
            }
        }
    }
    if (sandValue < 3) {
        for (i in data) {
            if (data[i].requires == 'sand3') {
                document.getElementById("check" + i).style.display = 'none';
            }
        }
    }
    if (sandValue >= 4) {
        for (i in data) {
            if (data[i].requires == 'sand4') {
                document.getElementById("check" + i).style.display = 'block';
            }
        }
    }
    if (sandValue < 4) {
        for (i in data) {
            if (data[i].requires == 'sand4') {
                document.getElementById("check" + i).style.display = 'none';
            }
        }
    }
    if (lakeValue == 1) {
        for (i in data) {
            if (data[i].requires == 'lake1') {
                document.getElementById("check" + i).style.display = 'block';
            }
        }
    }
    if (lakeValue != 1) {
        for (i in data) {
            if (data[i].requires == 'lake1') {
                document.getElementById("check" + i).style.display = 'none';
            }
        }
    }
    if (woodedValue >= 1) {
        for (i in data) {
            if (data[i].requires == 'wooded1') {
                document.getElementById("check" + i).style.display = 'block';
            }
        }
    }
    if (woodedValue == 0) {
        for (i in data) {
            if (data[i].requires == 'wooded1') {
                document.getElementById("check" + i).style.display = 'none';
            }
        }
    }
    if (woodedValue >= 2) {
        for (i in data) {
            if (data[i].requires == 'wooded2') {
                document.getElementById("check" + i).style.display = 'block';
            }
        }
    }
    if (woodedValue < 2) {
        for (i in data) {
            if (data[i].requires == 'wooded2') {
                document.getElementById("check" + i).style.display = 'none';
            }
        }
    }
    if (woodedValue >= 3) {
        for (i in data) {
            if (data[i].requires == 'wooded3') {
                document.getElementById("check" + i).style.display = 'block';
            }
        }
    }
    if (woodedValue < 3) {
        for (i in data) {
            if (data[i].requires == 'wooded3') {
                document.getElementById("check" + i).style.display = 'none';
            }
        }
    }
    if (woodedValue >= 4) {
        for (i in data) {
            if (data[i].requires == 'wooded4') {
                document.getElementById("check" + i).style.display = 'block';
            }
        }
    }
    if (woodedValue < 4) {
        for (i in data) {
            if (data[i].requires == 'wooded4') {
                document.getElementById("check" + i).style.display = 'none';
            }
        }
    }
    if (metroValue >= 1) {
        for (i in data) {
            if (data[i].requires == 'metro1') {
                document.getElementById("check" + i).style.display = 'block';
            }
        }
    }
    if (metroValue == 0) {
        for (i in data) {
            if (data[i].requires == 'metro1') {
                document.getElementById("check" + i).style.display = 'none';
            }
        }
    }
    if (metroValue >= 2) {
        for (i in data) {
            if (data[i].requires == 'metro2') {
                document.getElementById("check" + i).style.display = 'block';
            }
        }
    }
    if (metroValue < 2) {
        for (i in data) {
            if (data[i].requires == 'metro2') {
                document.getElementById("check" + i).style.display = 'none';
            }
        }
    }
    if (metroValue >= 3 && moonValue >= 75) {
        for (i in data) {
            if (data[i].requires == 'metro3moon75') {
                document.getElementById("check" + i).style.display = 'block';
            }
        }
    }
    if (metroValue < 3) {
        for (i in data) {
            if (data[i].requires == 'metro3moon75') {
                document.getElementById("check" + i).style.display = 'none';
            }
        }
    }

    for (i in foundMoons) {
        for (j in data) {
            if (foundMoons[i] == data[j].name) {
                document.getElementById("check" + j).style.display = "none";
            }
        }
    }
}