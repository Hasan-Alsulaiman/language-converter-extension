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
                alert(result.join(""))
            });

        

    }, false);
  }, false);