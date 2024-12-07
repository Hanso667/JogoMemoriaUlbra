function start() {

    document.getElementById("Start").style.display = "none";
    document.getElementById("Settings").style.display = "flex";

}

function SetDiff(diff) {

    document.getElementById("Settings").style.display = "none";

    if (diff == "easy") {
        document.getElementById("EasyDeck").style.display = "flex";
    } else if (diff == "normal") {
        document.getElementById("NormalDeck").style.display = "flex";
    } else if (diff == "hard") {
        document.getElementById("HardDeck").style.display = "flex";
    }

}
function goBack(){
    document.getElementById("EasyDeck").style.display = "none";
    document.getElementById("NormalDeck").style.display = "none";
    document.getElementById("HardDeck").style.display = "none";
    document.getElementById("Start").style.display = "flex";
}
