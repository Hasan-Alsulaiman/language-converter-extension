document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', function() {
        const input = document.getElementById("inputText").value;

        const url = chrome.runtime.getURL('json/en_ar.json');
              
        fetchCharJSON(url)
            .then((charMap) => convert(input, charMap))
            .then(display)
        
            

    }, false);
  }, false);



// function definitions
async function fetchCharJSON(url) {
    const response = await fetch(url);
    const movies = await response.json();
    return movies;
}

function convert(input, charMap) {
    let result = []
    for(let key of input){
        result.push(key in charMap?charMap[key]: key)
    }
    return result;
}

function display(result) {
    let resultElement = document.getElementById("result");
    let text = document.createTextNode(result.join(""));
    resultElement.appendChild(text);
}