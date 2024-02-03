
function myFunction() {
    var x = document.getElementById("nama").value;
if (x === "elmira haliza sukmawan") {
    document.getElementById("kirim").setAttribute("href", "https://hunterscop1.github.io/ultah/")
}
else if (x === "gladys florentha") {
    document.getElementById("kirim").setAttribute("href", "/g/index.html")
}
else{
    document.getElementById("kirim").setAttribute("href", "/salah/index.html")
}
}