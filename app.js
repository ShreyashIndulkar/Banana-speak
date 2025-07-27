var btnTranslate = document.querySelector("#btn-transalate");
var txtInput = document.querySelector("#txt-input");
var divOutput = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(error){

}

function clickHandler(){
    var inputText = txtInput.value;
    fetch(getTranslationUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var transalatedText = json.contents.translated;
        divOutput.innerText = transalatedText;
    })
};

btnTranslate.addEventListener("click", clickHandler);