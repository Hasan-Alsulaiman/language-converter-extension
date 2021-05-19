document.addEventListener('DOMContentLoaded', function() {
    var checkButton = document.getElementById('submit');
    checkButton.addEventListener('click', function() {
        const input = document.getElementById("inputText").value;

        const url = chrome.runtime.getURL('json/en_ar.json');
              
        fetchCharJSON(url)
            .then((chars) => convert(input, chars))
            .then(display)
        
            

    }, false);
  }, false);

async function fetchCharJSON(url) {
    const response = await fetch(url);
    const movies = await response.json();
    return movies;
}

function convert(input, charMap) {
    let result = []
    for(let key of input){
    result.push(charMap[key])
    }
    return result;
}

function display(result) {
    let resultElement = document.getElementById("result");
    let text = document.createTextNode(result.join(""));
    resultElement.appendChild(text);
}