document.addEventListener('DOMContentLoaded', function() {
    var checkButton = document.getElementById('submit');
    checkButton.addEventListener('click', function() {
    const x = document.getElementById("inputText").value;

    const url = chrome.runtime.getURL('json/json.json');
    fetch(url)
        .then((response) => response.json()) //assuming file contains json
        .then((json) => alert(json.a));

     

    }, false);
  }, false);