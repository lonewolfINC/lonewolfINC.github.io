<html>
<head>
    <meta charset="utf-8">
    <title>dibujo canvas</title>
    <style>
        body
        {
            background-color: black;
            color: azure;
            font-family: sans-serif;
        }
    </style>
</head>
<body>
    <h1>DIBUJANDO EN CANVAS</h1>
    <p>Tienes un cuadro del tamaño 300 x 300 donde puedes ecoger el punto de hubicacion <br>
         donde quieres que inicie el dibujo y donde termine y la cantidad de lineas que quieres colocarle,
         pero no te tienes <br>
         que preocupar por eso, te lo reduciré de <br>
         la manera mas intuitiva posible con solo 4 cuadros <br>
         donde vas ingresar el valor de 0 a 300 como maximo.
    </p>

            <p>
                escoge el punto inicial y final, <strong>recuerda, el tamaño del lienzo es de 300 x 300 <br>
                no coloques un valor que supere ese mismo numero</strong> <br>
                <br>
                ¿cuantas lineas quieres para tu dibujo? <br>
                <br>
                <input type="text" id="caja_texto" /> <br>
                <br>
                coloca 1 cifra por cada cuadro. <br>
                <br>
                <input type="text" id="caja_1" />
                <input type="text" id="caja_2" />
                <input type="text" id="caja_3" />
                <input type="text" id="caja_4" /> <br>
                
                <br>
                <input type="button" value="Click" id="botoncito" />
            </p>
    <canvas width="300" height="300" id="dibujo"></canvas>

    <script src="draw.js"></script>
</body>
</html>
