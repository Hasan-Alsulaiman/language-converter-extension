document.addEventListener('DOMContentLoaded', function() {
    var checkButton = document.getElementById('submit');
    checkButton.addEventListener('click', function() {
        const input = document.getElementById("inputText").value;

        const url = chrome.runtime.getURL('json/en_ar.json');
        fetch(url)
            .then((response) => response.json()) //assuming file contains json
            .then( function (en_ar) {
                let result = []
                for(let key of input){
                result.push(en_ar[key])
                }
                
                let resultElement = document.getElementById("result");
                let text = document.createTextNode(result.join(""));
                
                resultElement.appendChild(text);
        
            });
        

              
            let chars = fetchCharJSON(url)
            let r = converter(input, chars)

    }, false);
  }, false);

  async function fetchCharJSON(url) {
    const response = await fetch(url);
    const movies = await response.json();
    return movies;
  }

 function converter(input, charMap) {
     alert(input)
    let result = []
    for(let key of input){
    result.push(charMap[key])
    }
    return result;
  }