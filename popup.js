document.getElementById("inputText").addEventListener("click", getText);
    function getText(){
        console.log("hello there")
        var x = document.getElementById("inputText").value;
        console.log("text is: ",x);
    }