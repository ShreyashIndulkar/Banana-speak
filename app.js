var btnTranslate = document.querySelector("#btn-transalate");
var txtInput = document.querySelector("#txt-input");
var divOutput = document.querySelector("#output");

function clickHandler(){
    divOutput.innerText = "Translated to Banana language: " + txtInput.value;
};

btnTranslate.addEventListener("click", clickHandler);