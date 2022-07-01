const txtEntradaTexto = document.querySelector("#Texto");
const bttEncriptar = document.querySelector("#encriptar");
const bttDesencriptar = document.querySelector("#desencriptar");
const txtResultado = document.querySelector("#resultado");
const bttCopiar = document.querySelector("#copiar");
const contenedorErrores = document.querySelector(".contenedor-errores");

function validarMensaje () {
    // Borrar errores previos
    let erroresPrevios = contenedorErrores.querySelectorAll(".error");
    for (let err of erroresPrevios) {
        contenedorErrores.removeChild(err);
    }
    var mensaje = txtEntradaTexto.value;
    let letrasValidas = "abcdefghijklmnñopqrstuvwxyz ";
    let mensajeError = document.createDocumentFragment();
    for (let letra of mensaje) {
        if (!letrasValidas.includes(letra)) {
            let p = document.createElement("p");
            p.setAttribute("class", "error");
            p.textContent = `La letra ${letra} no es valida`;
            mensajeError.appendChild(p);
        }
    }
    contenedorErrores.appendChild(mensajeError);
    if (contenedorErrores.children.length === 0) {
        return true;
    }
    return false;
}

function encriptar()
{
    if(!validarMensaje())return;
    let mensaje= txtEntradaTexto.value;
    let mensajeEncriptado= mensaje
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");
    txtResultado.value=mensajeEncriptado;
}
function desencriptar()
{
    if(!validarMensaje()) return;
    let mensajeDesencriptado= txtEntradaTexto.value;
    let mensje= mensajeDesencriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");

    txtResultado.value= mensje;
}
function copiar()
{
    var mensajeEncriptado = txtResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    txtResultado.value = "";
    txtResultado.focus();
}

bttEncriptar.onclick= encriptar;
bttDesencriptar.onclick=desencriptar;
bttCopiar.onclick= copiar;