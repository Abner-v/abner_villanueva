
document.getElementById("suma").onclick=function()
{  
    var acumula=0;
    acumula=parseInt(document.getElementById("num1").value)+parseInt(document.getElementById("num2").value)+parseInt(document.getElementById("num3").value);
    document.getElementById("res").value=acumula;
    console.log(acumula);
}
document.getElementById("promedio").onclick=function()
{  
    var acumula=0;
    acumula=parseInt(document.getElementById("num1").value)+parseInt(document.getElementById("num2").value)+parseInt(document.getElementById("num3").value);
    document.getElementById("res").value=acumula/3;
    console.log(acumula/3);
}
document.getElementById("mayor").onclick=function()
{  mayor=0;
    var a=0;
    var b=0;
    var c=0;

    a=parseInt(document.getElementById("num1").value)
    b=parseInt(document.getElementById("num2").value)
    c=parseInt(document.getElementById("num3").value);
    if(a>b)
        if(a>c)
         mayor=a;
         else
         mayor=c;
    else
        if(b>c)
        mayor=b;
        else
        mayor =c;
    document.getElementById("res").value=mayor;
    console.log(mayor);
}