var preguntas = [
    {
        pregunta: "El sol es una estrella.",
        respuesta: true
    },
    {
        pregunta: "El agua hierve a 100 grados Celsius.",
        respuesta: true
    },
    {
        pregunta: "El lenguaje de programación JavaScript es lo mismo que Java.",
        respuesta: false
    },
    {
        pregunta: "El número atómico del litio es 17",
        respuesta: false
    },
    {
        pregunta: "Un cruce entre un caballo y una cebra se llama \"Cabce\".",
        respuesta: false
    },
    {
        pregunta: "La ginebra suele estar incluida en un 'Long Island Iced Tea'.",
        respuesta: true
    },
    {
        pregunta: "El unicornio es el animal nacional de Escocia.",
        respuesta: true
    },
    {
        pregunta: "La Gran Muralla China es más larga que la distancia entre Londres y Pekín.",
        respuesta: true
    },
    {
        pregunta: "En 'Harry Potter', Draco Malfoy no tiene hermanos.",
        respuesta:false 
    },
    {
        pregunta: "La construcción de la Torre Eiffel se completó el 31 de marzo de 1887",
        respuesta:false
    },
    {
        pregunta: "Melbourne es la capital de Australia.",
        respuesta: false
    },
    {
        pregunta: "La penicilina fue descubierta en Vietnam para tratar la malaria",
        respuesta: false 
    },
    {
        pregunta: "La punta de la torre Eiffel se inclina alejándose del sol",
        respuesta: true
    },
    {
        pregunta: "Los relámpagos nunca caen en el mismo lugar",
        respuesta: false
    },
    {
        pregunta: "Los encendedores fueron inventados antes que los fósforos (cerillos)",
        respuesta: true
    },
    {
        pregunta: "Las bombillas fueron invención de Thomas Edison",
        respuesta: false
    },
    // Agregar más preguntas aquí
];

// Función para mezclar el array utilizando el algoritmo de Fisher-Yates
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Mezclar el array de preguntas
shuffle(preguntas);

var indicePregunta = 0;
var respuestaCorrecta = 0;
var respuestaIncorrecta = 0;
var tiempoLimite = 10; //segundos
var temporizador;



function iniciarTemporizador() {
    tiempoLimite = 10;
    temporizador = setInterval(function() {
        tiempoLimite--;
        if (tiempoLimite === 0) {
            clearInterval(temporizador);
            var pantalla= "Se te acabo el tiempo";
            mostrarPantalla(pantalla)
        }
        document.getElementById("tiempo-restante").innerHTML = tiempoLimite ;
    }, 1000);
}


function cargarPregunta() {
    var preguntaActual = preguntas[indicePregunta];
    document.getElementById("pregunta").innerHTML = preguntaActual.pregunta;
    iniciarTemporizador();
    document.getElementById("tiempo-restante").innerHTML =tiempoLimite;
}


function responder(respuesta) {
    clearInterval(temporizador);
    var preguntaActual = preguntas[indicePregunta];

    if (respuesta === preguntaActual.respuesta) {
        respuestaCorrecta++;
    } else {
        respuestaIncorrecta++;
    }

    indicePregunta++;

    if (indicePregunta < preguntas.length) {
        cargarPregunta();
    } else {
       if (respuestaCorrecta >= respuestaIncorrecta) {
             var pantalla= "Ganaste, tienes mucho conocimientos generales";
             mostrarPantalla(pantalla)
       }else{
            // mostrarPantallaPerder();
            var pantalla= "Perdiste,intenta lo de nuevo";
            mostrarPantalla(pantalla)
       }
    }
}


function mostrarPantalla(pantalla) {
    var totalPreguntas = preguntas.length;
    document.getElementById("pregunta").innerHTML = pantalla +"<br>"+ " Resultados:<br><br>" +
    "Respuestas correctas: " + respuestaCorrecta + "/" + totalPreguntas + "<br>" +
    "Respuestas incorrectas: " + respuestaIncorrecta + "/" + totalPreguntas + "<br><br>" +
    "<button onclick='reiniciarJuego()'>Reiniciar juego</button>";
    document.getElementById("opciones").style.display = "none";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("tiempo-restante").innerHTML = "";
}


function reiniciarJuego() {
    indicePregunta = 0;
    respuestaCorrecta = 0;
    respuestaIncorrecta = 0;
    document.getElementById("opciones").style.display = "block";
    cargarPregunta();
    document.getElementById("resultado").innerHTML = "";
}
cargarPregunta();