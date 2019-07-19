function convertTo() {
    var temp = document.getElementById("temp").value;
    // convert the temp from the user to cel
    temp = (parseFloat(9.0/5.0)) * (parseFloat(temp) - 32.0);

    var answer = document.getElementById("answer");
    answer.innerHTML = "Temperature is : " + temp + " deg cel";
}

// var mybody = document.body;
// mybody.onclick = myalert();


function myalert() {
    alert("I am a body");
}