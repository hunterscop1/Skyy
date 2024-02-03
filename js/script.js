
function myFunction() {
    var x = document.getElementById("nama").value;
    var y = x.toUpperCase()
if (y === "ELMIRA HALIZA SUKMAWAN") {
    document.getElementById("kirim").setAttribute("href", "https://hunterscop1.github.io/ultah/")
}
else if (y === "GLADYS FLORENTHA") {
    document.getElementById("kirim").setAttribute("href", "https://hunterscop1.github.io/pulung/")
}
else{
    document.getElementById("kirim").setAttribute("href", "/salah/index.html")
}
}
