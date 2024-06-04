// MENSAJE DE DESPEDIDA al principio del código para que recaiga en todo el mismo
const mensajeDespedida = "Gracias por participar. ¡Hasta luego!👋🏻";

// FUNCIÓN PARA SOLICITAR INFORMACIÓN
function solicitarInformacion(mensaje) {
    let respuesta = prompt(mensaje);
    if (respuesta === null) {
        alert(mensajeDespedida);
        return null;
    }
    return respuesta;
}

// FUNCIÓN PARA SELECCIONAR GÉNERO
function solicitarGenero() {
    let genero;
    do {
        genero = solicitarInformacion("¿Cuál es tu género? -> M (masculino)♂️ F (femenino)♀️ N (prefiero no decir)😶").toUpperCase();
        if (genero === null) return null;
        if (genero !== "M" && genero !== "F" && genero !== "N") {
            alert("El género seleccionado no es válido❌. Por favor, selecciona M (masculino), F (femenino) o N (prefiero no decir)");
        }
    } while (genero !== "M" && genero !== "F" && genero !== "N");

    if (genero === "M") {
        alert("Bienvenido entrenador " + nombre + "!✨");
    } else if (genero === "F") {
        alert("Bienvenida entrenadora " + nombre + "!✨");
    } else {
        alert("Bienvenid@ entrenador " + nombre + "!✨");
    }
    console.log("Género seleccionado: " + genero);
    return genero;
}

// FUNCIÓN PARA PREGUNTAR Y VALIDAR RESPUESTAS
function preguntar(mensaje, opciones) {
    let respuesta;
    do {
        respuesta = solicitarInformacion(mensaje);
        if (respuesta === null) return null;
        respuesta = parseInt(respuesta);
        if (!opciones.includes(respuesta)) {
            alert("Opción no válida❌. Por favor, selecciona una opción entre " + opciones.join(", "));
        }
    } while (!opciones.includes(respuesta));
    return respuesta;
}

// FUNCIÓN PARA CALCULAR PUNTAJE
function calcularPuntaje(respuestas) {
    let mensaje = "Tus respuestas fueron: " + respuestas.join(", ");
    let resultadoFinal = determinarResultadoFinal(respuestas);
    mensaje += "\nResultado final: " + resultadoFinal;
    return mensaje;
}

// FUNCIÓN PARA DETERMINAR RESULTADO FINAL
function determinarResultadoFinal(respuestas) {
    // NO LOGRO HACER QUE EL CÓDIGO CAMBIE LA RESPUESTA (siempre sale eléctrico como resultado final)
    let suma = respuestas.reduce((a, b) => a + b, 0);

    if (suma <= 5) {
        return "Tipo Pokémon: Agua 🌊";
    } else if (suma <= 10) {
        return "Tipo Pokémon: Fuego 🔥";
    } else if (suma <= 15) {
        return "Tipo Pokémon: Planta 🌿";
    } else {
        return "Tipo Pokémon: Eléctrico ⚡";
    }
}

// INICIO DEL SCRIPT
let nombre = solicitarInformacion("Ingrese su nombre");
if (nombre !== null) {
    console.log(nombre);
    let genero = solicitarGenero();
    if (genero !== null) {
        let continuar = true;
        while (continuar) {
            let confirmacion = confirm("¿Empezamos con el test?");
            if (!confirmacion) {
                console.log("El usuario ha decidido no continuar con el test");
                alert(mensajeDespedida);
                break;
            }

            let respuestas = [];

            let pregunta1 = preguntar("¿Cuál es tu estación favorita del año? 1) Verano🏖️ 2) Primavera🌼 3) Otoño🍂 4) Invierno❄️", [1, 2, 3, 4]);
            if (pregunta1 === null) break;
            let respuesta1 = ["Verano", "Primavera", "Otoño", "Invierno"][pregunta1 - 1];
            respuestas.push(respuesta1);
            console.log(respuesta1);

            let pregunta2 = preguntar("¿Qué cualidad te describe mejor? 1) Valiente⚔️ 2) Amigable🤝 3) Curioso🔍 4) Reflexivo💭", [1, 2, 3, 4]);
            if (pregunta2 === null) break;
            let respuesta2 = ["Valiente", "Amigable", "Curioso", "Reflexivo"][pregunta2 - 1];
            respuestas.push(respuesta2);
            console.log(respuesta2);

            let pregunta3 = preguntar("¿Cuál es tu actividad preferida en tu tiempo libre? 1) Practicar deportes🎾 2) Leer📚 3) Salir con amigos👯 4) Meditar🧘🏻", [1, 2, 3, 4]);
            if (pregunta3 === null) break;
            let respuesta3 = ["Practicar deportes", "Leer", "Salir con amigos", "Meditar"][pregunta3 - 1];
            respuestas.push(respuesta3);
            console.log(respuesta3);

            let pregunta4 = preguntar("¿Cuál es tu color favorito? 1) Rojo🔴 2) Azul🔵 3) Verde🟢 4) Amarillo🟡", [1, 2, 3, 4]);
            if (pregunta4 === null) break;
            let respuesta4 = ["Rojo", "Azul", "Verde", "Amarillo"][pregunta4 - 1];
            respuestas.push(respuesta4);
            console.log(respuesta4);

            let pregunta5 = preguntar("¿Cómo reaccionas frente a un desafío? 1) Con pasión y determinación🔥 2) Con calma y paciencia😌 3) Con creatividad y astucia🖌️ 4) Con inteligencia y estrategia🤓", [1, 2, 3, 4]);
            if (pregunta5 === null) break;
            let respuesta5 = ["Con pasión y determinación", "Con calma y paciencia", "Con creatividad y astucia", "Con inteligencia y estrategia"][pregunta5 - 1];
            respuestas.push(respuesta5);
            console.log(respuesta5);

            let resultadoTest = calcularPuntaje(respuestas);
            alert("¡Gracias por completar el test! " + resultadoTest);

            confirmacion = confirm("¿Deseas volver a realizar el test?");
            if (!confirmacion) {
                continuar = false;
                alert("¡Gracias por participar! Hasta luego!👋🏻");
            }
        }
    }
}