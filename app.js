//variables
let entrada = [];
let nuevoMensaje = [];


//funcion para encritar el mensaje 
function encriptar(){
    entrada= document.getElementById('mensajeUsuario').value;
    let validacion = validar(entrada);

    if (validacion == true){
        asignarTextoElemto('h2', 'El texto contiene mayusculas o acentos, verifca y vuelve a intentar');
    }
    else{
        nuevoMensaje = codificacion(entrada);
        console.log(nuevoMensaje);
        asignarTextoElemto('h2',' ');
        asignarTextoElemto ('#mostrarTexto',nuevoMensaje);
        document.getElementById('botonCopiar').removeAttribute("hidden");
        limpiarCaja();
    }
    
}
//parametros de la ccodificacion
function codificacion (mensaje){
    const codigo = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat',
    };

    // Realizar las sustituciones
    const nuevaCadena = mensaje.replace(/[aeiou]/g, (match) => codigo[match] || match);
    return nuevaCadena;
}
//Funcion para desencriptar el mensaje 
function desencriptar(){
    entrada= document.getElementById('mensajeUsuario').value;
    let validacion = validar(entrada);

    if (validacion == true){
        asignarTextoElemto('h2', 'El texto contiene mayusculas o acentos, verifca y vuelve a intentar');
    }
    else{
        nuevoMensaje = decodificacion(entrada);
        asignarTextoElemto('h2',' ');
        console.log(nuevoMensaje);
        asignarTextoElemto ('#mostrarTexto',nuevoMensaje);
        document.getElementById('botonCopiar').removeAttribute("hidden");
        limpiarCaja();
    }
}
//funcion para decodificar
function decodificacion(mensaje){
    const sustituciones = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    // Utilizar una expresión regular para buscar las sustituciones
    const regex = new RegExp(Object.keys(sustituciones).join('|'), 'g');

    // Realizar las sustituciones
    const nuevaCadena = mensaje.replace(regex, (match) => sustituciones[match]);

    return nuevaCadena;
}
//Funcion para copiar el mensage 
function copiar(){
    const texto = nuevoMensaje;
    navigator.clipboard.writeText(texto);
    console.log(texto);
    estadoOriginal();
    alert("Texto Copiado");
}
//Funcion para verificar no contenga mayusculas y minusculas 
function validar(cadena){
    // Expresión regular para buscar letras mayúsculas y acentuadas
    const exprecionRegular = /[A-ZÁÉÍÓÚÜÑáéíóúüñ]/g;
    return exprecionRegular.test(cadena);
}
function asignarTextoElemto(elemento, texto){
    let elementoHtml= document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}
function limpiarCaja(){
    document.querySelector('#mensajeUsuario').value = '';
}
function estadoOriginal(){
    asignarTextoElemto('h2','');
    asignarTextoElemto('#mostrarTexto', '');   
}