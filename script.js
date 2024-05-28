document.getElementById('gender').addEventListener('input', function() {
var genderLabel = document.getElementById('genderLabel');
genderLabel.textContent = this.value == 0 ? 'Männlich' : 'Weiblich';
});

function calculateTHC() {
var gender = document.getElementById('gender').value;
var thcContent = parseFloat(document.getElementById('thcContent').value);
var amount = parseFloat(document.getElementById('amount').value);
var time = parseFloat(document.getElementById('time').value);
var age = parseInt(document.getElementById('age').value);
var weight = parseFloat(document.getElementById('weight').value);

if (isNaN(thcContent) || isNaN(amount) || isNaN(time) || isNaN(age) || isNaN(weight)) {
alert("Bitte alle Felder korrekt ausfüllen.");
return;
}

// Beispielhafte Berechnungslogik (dies ist eine einfache und nicht genaue Berechnung)
var bodyFat = gender == 0 ? 0.15 : 0.25; // Durchschnittlicher Körperfettanteil
var distributionRatio = 1 - bodyFat;
var thcDose = thcContent * amount * 1000; // THC in mg
var bloodVolume = weight * 70; // Blutvolumen in ml, grob geschätzt
var thcInBlood = (thcDose * distributionRatio) / bloodVolume;
var thcConcentration = thcInBlood * Math.exp(-0.03 * time); // Abbau über die Zeit, einfacher Exponentialabfall

var resultText = "Der geschätzte THC-Gehalt im Blutserum beträgt " + thcConcentration.toFixed(2) + " ng/mL.";

// Anzeige im Popup
document.getElementById('resultText').textContent = resultText;
document.getElementById('resultPopup').style.display = 'flex';
}

function closePopup() {
document.getElementById('resultPopup').style.display = 'none';
}