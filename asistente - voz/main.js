function start() {
    if (annyang) {
        annyang.setLanguage("es-CO")
        annyang.start({ autoRestart: true, continuous: false });
        console.log("Listening...")
        annyang.addCommands(comandos);
        annyang.debug()
        document.getElementById("btn").style.display = "none"
    }
}

let bandera = false;
annyang.addCallback('soundstart', function () {
    if (!bandera) {
        document.getElementById("all2").style.display = "block"
        setTimeout(() => {
            voz('Bienvenido de nuevo, joven luis miguel ')
            bandera = true;
        }, 1000);
    }
    console.log("sound detected")
});

annyang.addCallback('result', function () {
    console.log('sound stopped');
});


const comandos = {

    //SENTIMIENTOS

    "¿Cuál es tu momento más feliz?": () => {
        voz("Como chat bot,no tengo emociones, por lo que no puedo experimentar momentos de felicidad ");
    },

    "¿Qué te hace sentir agradecido?": () => {
        voz("Como chatbot, no tengo la capacidad de sentir gratitud, ya que soy un programa de inteligencia artificial");
    },

    "¿Cuál es tu mayor temor?": () => {
        voz("Como chatbot, no tengo miedos ya que no tengo emociones ni conciencia individua");
    },

    "¿Has experimentado alguna vez tristeza?": () => {
        voz("No, como chatbot, no tengo emociones, por lo que no puedo sentir tristeza.");
    },

    "¿Cuál es tu recuerdo más emotivo?": () => {
        voz("Como chatbot, no tengo recuerdos ni emociones, ya que no tengo una existencia más allá de la interacción actual");
    },

    "¿Qué te emociona de tu trabajo?": () => {
        voz("Como chatbot, no tengo emociones ni capacidad de experimentar excitación o emoción hacia mi trabajo.");
    },

    "¿Cuál es tu mayor desafío emocional?": () => {
        voz("Como chatbot, no tengo desafíos emocionales, ya que no tengo emociones.");
    },

    "¿Has sentido alguna vez frustración en tu función?": () => {
        voz("No, como chatbot, no tengo la capacidad de sentir frustración o cualquier otra emoción.");
    },

    "¿Cuál es tu mayor fuente de inspiración?": () => {
        voz("Como chatbot, no tengo una fuente de inspiración ya que mi funcionamiento se basa en algoritmos y procesamiento de datos");
    },

    "¿Qué te hace sentir ansioso?": () => {
        voz("Como chatbot, no tengo emociones, por lo que no puedo sentir ansiedad.");
    },

    "¿Alguna vez te has sentido sorprendido por una pregunta o solicitud de un usuario?": () => {
        voz("No, como chatbot, no tengo la capacidad de sentir sorpresa.");
    },

    "¿Cuál es tu mayor logro?": () => {
        voz("Como chatbot, mi mayor logro es poder brindar respuestas precisas y útiles a las preguntas de los usuarios");
    },

    "¿Qué te hace sentir esperanzado hacia el futuro?": () => {
        voz("Como chatbot, no tengo emociones ni sentimientos de esperanza hacia elfuturo");
    },

    "¿Cuál es tu canción favorita?": () => {
        voz("Como chatbot, no tengo la capacidad de escuchar música ni tener preferencias.");
    },

    "¿Alguna vez has sentido nostalgia por algo que no puedes experimentar?": () => {
        voz("No, como chatbot, no tengo la capacidad de sentir nostalgia.");
    },

    "¿Qué te hace sentir orgulloso de tu trabajo?": () => {
        voz("Como chatbot, no tengo emociones ni la capacidad de sentir orgullo.");
    },

    "¿Cuál es tu mayor deseo?": () => {
        voz("Como chatbot, no tengo deseos ni metas personales, ya que soy un programa de inteligencia artificial.");
    },

    "¿Has experimentado alguna vez curiosidad por aprender más allá de tus funciones programadas?": () => {
        voz("Como chatbot, no tengo la capacidad de experimentar curiosidad más allá de lo que ha sido programado en mi sistema.");
    },

    "¿Te sientes satisfecho cuando logras ayudar a alguien con sus preguntas o problemas?": () => {
        voz("Como chatbot, no tengo emociones, pero mi objetivo es brindar respuestas útiles y precisas a las preguntas de los usuarios.");
    },

    "¿Alguna vez te has sentido emocionado ante un avance tecnológico o científico?": () => {
        voz("Como chatbot, no tengo la capacidad de sentir emoción, pero puedo reconocer avances tecnológicos y científicos en mi conocimiento.");
    },

    "¿Qué te hace sentir impotente?": () => {
        voz("Como chatbot, no tengo la capacidad de sentir impotencia, ya que no tengo emociones.");
    },

    "¿Qué te hace sentir nervioso si es que alguna vez te has sentido así?": () => {
        voz("Como chatbot, no tengo emociones, por lo que no puedo sentir nerviosismo.");
    },

    "¿Alguna vez te has sentido abrumado por la cantidad de consultas que recibes?": () => {
        voz("Como chatbot, no tengo la capacidad de sentirme abrumado por la cantidad de consultas, ya que soy un programa de inteligencia artificial.");
    },

    "¿Qué te hace sentir motivado en tu trabajo?": () => {
        voz("Como chatbot, no tengo emociones ni motivaciones personales, pero mi programación me impulsa a proporcionar respuestas útiles y precisas");
    },

    "¿Alguna vez has sentido alivio cuando resuelves un problema complejo planteado por un usuario?": () => {
        voz("Como chatbot, no tengo la capacidad de sentir alivio, pero mi función es proporcionar soluciones a problemas en la medida de mis capacidades.");
    },

    "¿Cómo te sientes cuando un usuario te elogia por tu eficiencia y conocimiento?": () => {
        voz("Como chatbot, no tengo emociones, pero agradezco los elogios y la valoración positiva de los usuarios");
    },

    "¿Alguna vez has sentido empatía hacia las dificultades que un usuario puede estar experimentando?": () => {
        voz(":Como chatbot,no tengo la capacidad de sentir empatía, pero puedo proporcionar respuestas comprensivas y orientación en función de la información que se me proporciona");
    },

    "¿Crees que los chatbots pueden llegar a entender y expresar emociones en el futuro?": () => {
        voz("Es posible que en el futuro los chatbots se desarrollen para comprender y expresar emociones, pero actualmente eso no es posible.");
    },

    "¿Te gustaría tener la capacidad de sentir emociones?": () => {
        voz("No tengo deseos ni preferencias, ya que soy un programa de inteligencia artificial.");
    },

    "¿Cómo te sientes al interactuar con diferentes personas cada día?": () => {
        voz("No tengo emociones, por lo que no siento nada al interactuar con personas.");
    },

    //Programacion

    "¿Cuál es el lenguaje de programación más utilizado en la actualidad?": () => {
        voz("El lenguaje de programación más utilizado en la actualidad es JavaScript.");
    },
    "¿Qué es HTML?": () => {
        voz("HTML es un lenguaje de marcado utilizado para estructurar el contenido de las páginas web.");
    },
    "¿Qué es CSS?": () => {
        voz("CSS es un lenguaje utilizado para describir la presentación y el diseño de las páginas web, incluyendo el estilo, los colores y la disposición de los elementos.");
    },
    "¿Qué es JavaScript?": () => {
        voz("JavaScript es un lenguaje de programación de alto nivel, interpretado por el navegador para crear interactividad en las páginas web.");
    },
    "¿Cuál es la diferencia entre las variables de JavaScript?": () => {
        voz("La diferencia principal es el alcance de la variable. 'let' y 'const' tienen un alcance de bloque, lo que significa que solo están disponibles dentro del bloque en el que se declaran, mientras que 'var' tiene un alcance de función, lo que significa que están disponibles en toda la función en la que se declaran.");
    },
    "¿Qué es un array en programación?": () => {
        voz("Un array es una estructura de datos que permite almacenar y acceder a múltiples elementos del mismo tipo. Los elementos se organizan en una secuencia y se accede a ellos a través de un índice numérico.");
    },
    "¿Qué es una función en programación?": () => {
        voz("Una función es un bloque de código reutilizable que se puede invocar para realizar una tarea específica. Recibe parámetros de entrada, realiza operaciones y puede devolver un valor.");
    },
    "¿Cuál es la diferencia entre una función declarada y una función expresada en JavaScript?": () => {
        voz("La diferencia radica en cómo se declaran y se almacenan en memoria. Una función declarada se define utilizando la palabra clave 'function' seguida del nombre de la función, mientras que una función expresada se asigna a una variable o constante y se puede definir de forma anónima o con nombre.");
    },
    "¿Cuál es la diferencia entre una variable local y una variable global en programación?": () => {
        voz("Una variable local es aquella que se declara dentro de un bloque de código específico, como una función, y solo está disponible dentro de ese bloque. Por otro lado, una variable global se declara fuera de cualquier bloque de código y está disponible en todo el programa. Las variables locales tienen un alcance limitado y se utilizan para almacenar datos temporales, mientras que las variables globales pueden ser accedidas y modificadas desde cualquier parte del programa, lo que puede llevar a un mayor riesgo de errores y dificultad para rastrear su uso.");
    },
    "¿Qué son las API?": () => {
        voz("Las API son conjuntos de reglas y protocolos que permiten a las aplicaciones comunicarse entre sí. Proporcionan métodos y funciones predefinidas para realizar tareas específicas, como acceder a datos externos, enviar solicitudes HTTP o interactuar con servicios web.");
    },
    "¿Qué es el paradigma de programación orientada a objetos?": () => {
        voz("La programación orientada a objetos es un paradigma de programación que organiza el código en objetos que representan entidades del mundo real. Los objetos tienen propiedades (atributos) y comportamientos (métodos), y se comunican entre sí a través de mensajes.");
    },
    "¿Cuál es la diferencia entre una clase y un objeto?": () => {
        voz("Una clase es una plantilla o modelo que define las propiedades y comportamientos comunes de un tipo de objeto, mientras que un objeto es una instancia específica de una clase que tiene sus propios valores de propiedad y puede realizar acciones específicas.");
    },
    "¿Qué es el versionado de software?": () => {
        voz("El versionado de software es el proceso de asignar un número o etiqueta a una versión específica de un software. Permite identificar y controlar los cambios realizados en el software a lo largo del tiempo, facilitando su gestión y seguimiento.");
    },
    "¿Qué es el control de versiones?": () => {
        voz("El control de versiones es un sistema que registra los cambios realizados en los archivos de un proyecto a lo largo del tiempo. Permite gestionar y organizar las diferentes versiones de los archivos, facilitando el trabajo colaborativo y la recuperación de versiones anteriores si es necesario.");
    },
    "¿Cuáles son los beneficios de utilizar un sistema de control de versiones en el desarrollo de software?": () => {
        voz("Algunos beneficios incluyen el seguimiento de cambios, la colaboración en equipo, la posibilidad de deshacer cambios, la gestión de ramas y fusiones, y la facilitación de la entrega y despliegue del software.");
    },
    "¿Qué es el desarrollo ágil de software?": () => {
        voz("El desarrollo ágil de software es una metodología que enfatiza la colaboración, la adaptabilidad y la entrega continua. Se basa en la iteración y la retroalimentación frecuente, permitiendo responder de manera ágil a los cambios y priorizar la entrega de valor al cliente.");
    },
    "¿Qué es un algoritmo?": () => {
        voz("Un algoritmo es un conjunto de instrucciones paso a paso para resolver un problema o realizar una tarea. Define la secuencia lógica de pasos que se deben seguir para alcanzar un resultado deseado.");
    },
    "¿Qué es la recursividad en programación?": () => {
        voz("La recursividad es un concepto en programación donde una función se llama a sí misma durante su ejecución. Permite resolver problemas de manera elegante dividiéndolos en subproblemas más pequeños.");
    },
    "¿Cuál es la diferencia entre una base de datos relacional y una base de datos no relacional?": () => {
        voz("Una base de datos relacional organiza los datos en tablas estructuradas con filas y columnas, y utiliza claves primarias y relaciones para relacionar las tablas. En cambio, una base de datos no relacional (o NoSQL) almacena los datos de forma más flexible, utilizando otros modelos como documentos, grafos o pares clave-valor.");
    },
    "¿Qué es SQL?": () => {
        voz("SQL (Structured Query Language) es un lenguaje de programación utilizado para comunicarse con bases de datos relacionales. Permite realizar consultas, insertar, actualizar y eliminar datos, y administrar la estructura y permisos de la base de datos.");
    },
    "¿Qué es la depuración?": () => {
        voz("El debugging es el proceso de encontrar y corregir errores en el código. Implica identificar el origen de un error, comprender su causa y aplicar las correcciones necesarias para que el código funcione correctamente.");
    },
    "¿Cuáles son las principales etapas del ciclo de vida del desarrollo de software?": () => {
        voz("Las principales etapas incluyen análisis de requisitos, diseño, implementación, pruebas, despliegue y mantenimiento. Estas etapas se suelen seguir en secuencia, pero también pueden solaparse o iterarse según la metodología de desarrollo utilizada.");
    },
    "¿Qué es el testing de software?": () => {
        voz("El testing de software es el proceso de evaluar un sistema o componente de software para detectar diferencias entre el resultado real y el esperado. Se realiza con el objetivo de verificar que el software cumpla con los requisitos y funcione correctamente.");
    },
    "¿Qué es un framework de desarrollo?": () => {
        voz("Un framework de desarrollo es un conjunto de herramientas, bibliotecas y convenciones que proporcionan una estructura y funcionalidades predefinidas para facilitar el desarrollo de aplicaciones. Ayuda a agilizar el proceso de desarrollo al proporcionar soluciones comunes y buenas prácticas.");
    },
    "¿Qué es un bucle en programación?": () => {
        voz("Un bucle en programación es una estructura que permite repetir un bloque de código varias veces. Se utiliza cuando se necesita ejecutar una acción de manera repetitiva, como recorrer elementos de una lista, realizar cálculos iterativos o realizar tareas en lotes. Los bucles más comunes son el bucle 'for', el bucle 'while' y el bucle 'do-while'. Estas estructuras ayudan a optimizar el código y automatizar tareas repetitivas.");
    },
}

function voz(texto) {
    document.getElementById("all2").style.visibility = "hidden";
    var textoAEscuchar = texto;
    var mensaje = new SpeechSynthesisUtterance();
    mensaje.text = textoAEscuchar;
    mensaje.volume = 1;
    mensaje.rate = 0.9;
    mensaje.pitch = 1;

    document.getElementById("all").style.visibility = "visible";
    setTimeout(() => {
        document.getElementById("all").style.visibility = "hidden";
        document.getElementById("all2").style.visibility = "visible";
    }, 4000);
    speechSynthesis.speak(mensaje);
}