function encode () {
    var inp = document.getElementById("textar").value;
    var encoded = btoa(inp);
    var text = document.getElementById("result").innerHTML = encoded;
}

function decode () {
    var inp = document.getElementById("textar").value;
    var decoded = atob(inp);
    var text = document.getElementById("result").innerHTML = decoded;
}