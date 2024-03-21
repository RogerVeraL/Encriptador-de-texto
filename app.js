function mostrarAlerta() {
    alert("Ingresa una frase para poder encriptarla o desencriptarla");
}

function ocultar_bloque_flotante(){
    muneco.style.display = "none";
    contenedor_parrafo.style.display = "none";
}

function agarrar_bloque_texto(){
    return document.querySelector(".texto").value;
}

function mostrar_boton_copiar(){
    document.querySelector(".contenedor-boton-copiar").style.display = "flex";
}

function limpiar_bloque_texto(){
    document.querySelector(".texto").value = "";
}

function exceso_palabras(frase){
    let cantidadPalabras = frase.split(/\s+/).length;
    if (cantidadPalabras >21) {
        transcripcion.style.fontSize = "15px";
    }else{
        transcripcion.style.fontSize = "20px";
    }
}

function encriptar(){
    let frase = agarrar_bloque_texto();
    if (frase === "") {
        mostrarAlerta();
        return;
    }
    exceso_palabras(frase);
    ocultar_bloque_flotante();
    limpiar_bloque_texto();
    mostrar_boton_copiar();
    // Método 1
    frase = frase.replace(/e/g, "enter");
    frase = frase.replace(/i/g, "imes");
    frase = frase.replace(/a/g, "ai");
    frase = frase.replace(/o/g, "ober");
    frase = frase.replace(/u/g, "ufat");
    transcripcion.textContent = frase;
}

function desencriptar(){
    let frase = agarrar_bloque_texto();
    if (frase === "") {
        mostrarAlerta();
        return;
    }
    exceso_palabras(frase);
    ocultar_bloque_flotante();
    limpiar_bloque_texto();
    mostrar_boton_copiar();
    // Método 2
    const reemplazos = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u"
    };
    for (let letra in reemplazos) {
        let regex = new RegExp(letra, 'g'); 
            frase = frase.replace(regex, reemplazos[letra]); 
    };
    transcripcion.textContent = frase;
}
function copiar(){
    let copiar_texto = transcripcion.textContent;
    navigator.clipboard.writeText(copiar_texto);
}

let muneco = document.querySelector(".contenedor-muneco");
let contenedor_parrafo = document.querySelector(".contenedor-parrafo");

let transcripcion = document.querySelector(".transcripcion");
