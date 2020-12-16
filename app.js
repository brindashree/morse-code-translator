var btnTranslate = document.querySelector("#btn-translate");
var userInput = document.querySelector("#input");
var outdiv = document.querySelector("#output");


var url = "https://api.funtranslations.com/translate/morse.json";

function constructurl(input) {
    return url + "?" + "text=" + input;
}

function clickHandler() {
    var text = userInput.value;
    // outdiv.innerText = userInput.value;
    // console.log(userInput.value);
    fetch(constructurl(text))
        .then(response => response.json())
        .then(data => {
            var translated = data.contents.translated;
            outdiv.innerText = translated;
        }).catch(errorHandler);
}
function errorHandler(error) {
    console.log("error : " , error);
}
btnTranslate.addEventListener("click", clickHandler);