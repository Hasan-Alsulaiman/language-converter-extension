document.addEventListener('DOMContentLoaded', function() {
    var checkButton = document.getElementById('submit');
    checkButton.addEventListener('click', function() {
    const x = document.getElementById("inputText").value;

    const url = chrome.runtime.getURL('json/ar_en.json');
    fetch(url)
        .then((response) => response.json()) //assuming file contains json
        .then( function (json) {
            alert(json.ض)
        });

     

    }, false);
  }, false);