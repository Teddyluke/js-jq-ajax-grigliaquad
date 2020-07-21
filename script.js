// al click su ogni sezione succede qualcosa

function addClickListener() {
var sezioni = $(".sezione");
sezioni.click(clickOnSection);
};

function clickOnSection() {
var sezione = $(this);
 sezione.html("");
$.ajax(
{
url: "https://flynn.boolean.careers/exercises/api/random/int",
method: "GET",
success: function (data, stato) {
  var success = data["success"];
  var value = data["response"];
console.log(value);
  if (success) {
    if (value <= 5) {
      sezione.addClass("yellow");
      sezione.append(value);
    } else {
      sezione.addClass("green");
      sezione.append(value);
    }
  }
},
error: function (richiesta, stato, errori) {
}


});
}













function init() {
addClickListener()

};

$(document).ready(init);
