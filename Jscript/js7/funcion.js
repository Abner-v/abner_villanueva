

acumula=0;

document.getElementById("b1").onclick = function () {
    document.getElementById("x").value += "1" 
}

document.getElementById("b2").onclick = function () {
    document.getElementById("x").value += "2" 
}

document.getElementById("b3").onclick = function () {
    document.getElementById("x").value += "3" 

}
document.getElementById("b4").onclick = function () {
    document.getElementById("x").value += "4" 
}
document.getElementById("b5").onclick = function () {
    document.getElementById("x").value += "5" 
}
document.getElementById("b6").onclick = function () {
    document.getElementById("x").value += "6" 
}
document.getElementById("b7").onclick = function () {
    document.getElementById("x").value += "7" 
}
document.getElementById("b8").onclick = function () {
    document.getElementById("x").value += "8" 
}
document.getElementById("b9").onclick = function () {
    document.getElementById("x").value += "9" 
}


document.getElementById("display").onclick = function () {
    document.getElementById("x").value = "";
}

document.getElementById("mas").onclick = function () {
    acumula = acumula + parseInt(document.getElementById("x").value);
    document.getElementById("x").value="";
}

document.getElementById("mostrar").onclick = function () {
    alert(acumula+parseInt(document.getElementById("x").value));
}

document.getElementById("borrar").onclick = function () {
    acumula=0;
}


