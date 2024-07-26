const preguntas = [
    {
      pregunta:
        "¿En qué año se lanzó el videojuego 'The Legend of Zelda: Ocarina of Time'?",
      opciones: ["1. 1995", "2. 1998", "3. 2000", "4. 2002"],
      respuesta: "2",
    },
    {
      pregunta:
        "¿Cuál es el nombre del personaje principal en 'The Witcher 3: Wild Hunt'?",
      opciones: [
        "1. Geralt of Rivia",
        "2. Ezio Auditore",
        "3. Arthur Morgan",
        "4. Kratos",
      ],
      respuesta: "1",
    },
    {
      pregunta: "¿Qué compañía desarrolló el videojuego 'Halo'?",
      opciones: ["1. Activision", "2. Bungie", "3. EA", "4. Ubisoft"],
      respuesta: "2",
    },
    {
      pregunta: "¿Cuál es el nombre del mapa original de 'PUBG'?",
      opciones: ["1. Miramar", "2. Vikendi", "3. Sanhok", "4. Erangel"],
      respuesta: "4",
    },
    {
      pregunta:
        "¿Cuál es el título del primer juego de la serie 'Final Fantasy'?",
      opciones: [
        "1. Final Fantasy I",
        "2. Final Fantasy II",
        "3. Final Fantasy III",
        "4. Final Fantasy IV",
      ],
      respuesta: "1",
    },
    {
      pregunta:
        "¿En qué videojuego se utiliza la frase 'War. War never changes'?",
      opciones: [
        "1. Fallout",
        "2. Call of Duty",
        "3. Battlefield",
        "4. Medal of Honor",
      ],
      respuesta: "1",
    },
    {
      pregunta: "¿Qué tipo de Pokémon es Pikachu?",
      opciones: ["1. Agua", "2. Fuego", "3. Eléctrico", "4. Planta"],
      respuesta: "3",
    },
    {
      pregunta: "¿Cuál es el nombre del protagonista en 'Metal Gear Solid'?",
      opciones: [
        "1. Solid Snake",
        "2. Sam Fisher",
        "3. Nathan Drake",
        "4. Lara Croft",
      ],
      respuesta: "1",
    },
    {
      pregunta: "¿Cuál es el arma icónica del juego 'DOOM'?",
      opciones: ["1. Lancer", "2. BFG 9000", "3. Plasma Rifle", "4. Gravity Gun"],
      respuesta: "2",
    },
    {
      pregunta: "¿Cuál es el nombre del creador de 'Minecraft'?",
      opciones: [
        "1. Markus Persson",
        "2. Shigeru Miyamoto",
        "3. Hideo Kojima",
        "4. Gabe Newell",
      ],
      respuesta: "1",
    },
  ];
  
  const readline = require("readline");
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let premioActual = 0;
  
  function pregunta(indexPregunta) {
    const preguntaActual = preguntas[indexPregunta];
    console.log(preguntaActual.pregunta);
    console.log(preguntaActual.opciones);
  
    rl.question("Selecciona una opción: ", (opcion) => {
      if (opcion === preguntaActual.respuesta) {
        premioActual += 100000;
        console.log(`correcto, tu premio actual es de ${premioActual} $`);
      } else {
        console.log(
          `Incorrecto la respuesta correcta era la numero ${preguntas[indexPregunta].respuesta}. El juego ha terminado. Ganaste ${premioActual} dólares.`
        );
        rl.close();
        return;
      }
      if (indexPregunta + 1 < preguntas.length) {
        pregunta(indexPregunta + 1);
      }  else {
        console.log(`ahora eres millonario, felicidades`);
        rl.close();
        return}
      // else if (indexPregunta + 1 === preguntas.length) {
      //   console.log(`ahora eres millonario, tu premio actual es: ${premioActual} $, felicidades`);
      //   rl.close();
      //   return;
      // }
    });
  }
  
  pregunta(0);