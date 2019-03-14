var billamt = document.getElementById("billamt");
var serviceQuality = document.getElementById("serviceQual");
var people = document.getElementById("people");
var eachTip = document.getElementById("tip");
var totalTip;

function calculateTip() {

    if (billamt.value === "" || serviceQuality === 0) {
        alert("Please enter values!");
    }

    if (people.value === "" || people.value < 1) {
        people.value = "1";
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    totalTip = (billamt.value) * (serviceQuality.value);
    eachTip.textContent = totalTip / (people.value);
}