// section#js03 arrays
// ******************************************************************************
var fruit = ["appel", "peer", "meloen"];      

function show_array_ol() {
  // alert("Hoi");
  var p_tag = document.getElementById("arrayTestOl");
  var output = "<ol>";
  for (var i = 0; i < fruit.length; i++) {
    output = output + "<li>" + fruit[i] + "</li>";
  }
  output = output + "</ol>"
  p_tag.innerHTML = output;
}

function show_array() {
  // alert("Hoi");
  var p_tag = document.getElementById("arrayTest");
  p_tag.innerHTML = "Dit is de inhoud van mijn fruit-array: " + fruit + "<br>" +
                    "Er zitten nu " + fruit.length + " elementen in mijn array";

}

function namePushButton() {
      alert("Er is over het knopje gehoverd");
      // Haal de waarde op uit het input-tag
      var inputTekst = document.getElementById("inputName");
      // console.log(inputTekst.value);

      // Zet een handvat op het p-tag
      var p_tag = document.getElementById("outputPara");
      // Verander de tekst in het p-tag met innerHTML
      p_tag.innerHTML = "Mijn naam is: " + inputTekst.value;
}

// *********************************************************************************************