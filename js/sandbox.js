// section#js03 arrays
// ******************************************************************************
var fruit = ["appel", "peer", "meloen"];
var p_tagAdd = document.getElementById("arrayAdd");

p_tagAdd.innerHTML = show_new_array();

function show_new_array() {
  var output = "<ol>";
  for ( var i = 0; i < fruit.length; i++) {
    output += "<li>" + fruit[i] + "</li>";
  }
  output += "</ol>";
  return output;
}

function show_array_ol() {
  var p_tag = document.getElementById("arrayTestOl");
  p_tag.innerHTML = show_new_array();
}

function show_array() {
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

function add_array_end() {
  // alert("All your base are belong to us!");
  var inputAddEnd = document.getElementById("inputAddEnd");

  // https://www.w3schools.com/js/js_array_methods.asp
  fruit.push(inputAddEnd.value);
  p_tagAdd.innerHTML = show_new_array();
  inputAddEnd.value = "";
}

// *********************************************************************************************