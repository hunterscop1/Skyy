
function myFunction() {
    var x = document.getElementById("nama").value;
    var y = x.toUpperCase().split(" ").join("")
if (y === "ELMIRAHALIZASUKMAWAN") {
    document.getElementById("kirim").setAttribute("href", "https://ultah-sigma.vercel.app/")
}
else if (y === "GLADYSFLORENTHA") {
    document.getElementById("kirim").setAttribute("href", "https://thx-omega.vercel.app/")
}
else if (y === "") {
    alert("Nama harus di isi!!")
    return false;
}
else if (y === "NICCO") {
    document.getElementById("kirim").setAttribute("href", "/n/index.html")
}
else{
    document.getElementById("kirim").setAttribute("href", "https://salah-sigma.vercel.app/")
}
}
