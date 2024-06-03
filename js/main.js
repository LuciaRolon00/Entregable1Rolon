// NOMBRE DEL USUARIO
let nombre = prompt("Ingrese su nombre")
console.log(nombre)

// GÉNERO DEL USUARIO
let genero = prompt("¿Cuál es tu género? -> M (masculino)♂️ F (femenino)♀️ N (prefiero no decir)😶").toUpperCase();

while (genero !== "M" && genero !== "F" && genero !== "N") {
    genero = prompt("El género seleccionado no es válido. Por favor, selecciona M (masculino), F (femenino) o N (prefiero no decir)").toUpperCase();
}

if (genero === "M" || genero === "m") {
    alert("Bienvenido entrenador "+nombre+"!✨");
} else if (genero === "F" || genero === "f") {
    alert("Bienvenida entrenadora "+nombre+"!✨");
} else if (genero === "N" || genero === "n") {
    alert("Bienvenid@ entrenador "+nombre+"!✨");
} else {
    console.log("Género no válido");
    alert("El género seleccionado no es válido");
}

console.log("Género seleccionado: " + genero);

// ARRAY PARA ALMACENAR LAS RESPUESTAS DEL USUARIO
let respuestas = [];

// INICIO DEL TEST
let continuar = true

while(continuar) {
    let confirmacion = confirm("¿Empezamos con el test?")
    if (!confirmacion) {
        console.log("El usuario ha decidido no continuar con el test");
        alert("Gracias por participar. ¡Hasta luego!");
        continuar = false;
        break;
    } else {
        let pregunta1 = parseInt(prompt("¿Cual es tu estación favorita del año? 1) Verano🏖️ 2) Primavera🌼 3) Otoño🍂 4) Invierno❄️"))
        switch(pregunta1) {
            case 1:
                console.log("Verano")
                respuestas.push("Verano")
                break
            case 2:
                console.log("Primavera")
                respuestas.push("Primavera")
                break
            case 3:
                console.log("Otoño")
                respuestas.push("Otoño")
                break
            case 4:
                console.log("Invierno")
                respuestas.push("Invierno")
                break
        }
        let pregunta2 = parseInt(prompt("¿Qué cualidad te describe mejor? 1) Valiente⚔️ 2) Amigable🤝 3) Curioso🔍 4) Reflexivo💭"))
        switch(pregunta2) {
            case 1:
                console.log("Valiente")
                respuestas.push("Valiente")
                break
            case 2:
                console.log("Amigable")
                respuestas.push("Amigable")
                break
            case 3:
                console.log("Curioso")
                respuestas.push("Curioso")
                break
            case 4:
                console.log("Reflexivo")
                respuestas.push("Reflexivo")
                break
        }
        let pregunta3 = parseInt(prompt("¿Cuál es tu actividad preferida en tu tiempo libre? 1) Practicar deportes🎾 2) Leer📚 3) Salir con amigos👯 4) Meditar🧘🏻"))
        switch(pregunta3) {
            case 1:
                console.log("Practicar deportes")
                respuestas.push("Deportes")
                break
            case 2:
                console.log("Leer")
                respuestas.push("Leer")
                break
            case 3:
                console.log("Salir con amigos")
                respuestas.push("Salir")
                break
            case 4:
                console.log("Meditar")
                respuestas.push("Meditar")
                break
        }
        let pregunta4 = parseInt(prompt("¿Cuál es tu color favorito? 1) Rojo🔴 2) Azul🔵 3) Verde🟢 4) Amarillo🟡"))
        switch(pregunta4) {
            case 1:
                console.log("Rojo")
                respuestas.push("Rojo")
                break
            case 2:
                console.log("Azul")
                respuestas.push("Azul")
                break
            case 3:
                console.log("Verde")
                respuestas.push("Verde")
                break
            case 4:
                console.log("Amarillo")
                respuestas.push("Amarillo")
                break
        }
        let pregunta5 = parseInt(prompt("¿Cómo reaccionas frente a un desafío? 1) Con pasión y determinación🔥 2) Con calma y paciencia😌 3) Con creatividad y astucia🖌️ 4) Con inteligencia y estrategia🤓"))
        switch(pregunta5) {
            case 1:
                console.log("Pasión")
                respuestas.push("Pasión")
                break
            case 2:
                console.log("Calma")
                respuestas.push("Calma")
                break
            case 3:
                console.log("Creatividad")
                respuestas.push("Creatividad")
                break
            case 4:
                console.log("Inteligencia")
                respuestas.push("Inteligencia")
                break
        }
        let resultadoTest = calcularPuntaje(respuestas);
        alert("¡Gracias por completar el test! " + resultadoTest);

        confirmacion = confirm("¿Deseas volver a realizar el test?");

        if (!confirmacion) {
            continuar = false;
            alert("¡Gracias por participar! Hasta luego."); 
        }   
    }
}

// RESPUESTAS OBTENIDAS DEL ARRAY
function calcularPuntaje(respuestas) {
    let mensaje = "Tus respuestas fueron: ";
    for (let i = 0; i < respuestas.length; i++) {
        mensaje += respuestas[i];
        if (i !== respuestas.length - 1) {
            mensaje += ", ";
        }
    }
    return mensaje;
}