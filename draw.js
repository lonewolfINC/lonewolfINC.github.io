var texto = document.getElementById("caja_texto");
var boton = document.getElementById("botoncito");

var texto_1 = document.getElementById("caja_1"); 
var texto_2 = document.getElementById("caja_2");
var texto_3 = document.getElementById("caja_3");
var texto_4 = document.getElementById("caja_4");


boton.addEventListener("click", presionarBoton );


var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");
var ancho = d.width;


function dibujarlineas(color, xinicial, xfinal, yinicial, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, xfinal);
    lienzo.lineTo(yinicial, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function presionarBoton()
{
    var y = parseInt(texto_1.value);
    var y0 = parseInt(texto_3.value)
    var y2 = parseInt(texto_2.value);
    var y30 = parseInt(texto_4.value)
    var x = parseInt(texto.value);
    var lineas = x;
    var l = 0;
    var xi, xf;
    var colorcito = "#A4A4A4";
    var colorcito2 = "#0000FF"
    var colorcito3 = "#5F04B4"
    var colorcito4 = "#3ADF00"

    var espacio = ancho / lineas;

for(l = 0; l < lineas; l++)
{
    xi = espacio * l;
    xf = espacio * (l + 1);
    dibujarlineas(colorcito, y, xi, xf, y2);
}

for(l = 0; l < lineas; l++)
{
    xi = espacio * l;
    xf = 300 - (espacio * l);
    dibujarlineas(colorcito2, xi, y2, y30, xf);
}

for(l = 0; l < lineas; l++)
{
    xi = espacio * l;
    xf = 300 - (espacio * l);
    dibujarlineas(colorcito3, y, xi, xf, y0);
}

for(l = 0; l < lineas; l++)
{
yi = espacio * (l + 1);
xf = espacio * l;
dibujarlineas(colorcito4, y30, yi, xf, y);
}

}
