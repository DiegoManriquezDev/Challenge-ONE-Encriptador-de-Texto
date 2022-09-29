const btnEncriptar = document.querySelector('.encriptar');
const btnDesencriptar = document.querySelector('.desencriptar');
const textArea = document.querySelector('.texto');
const btnCopiar = document.querySelector('.copiar');

const criptologia = [["e","enter"],['i','imes'],['a','ai'],['o','ober'],['u','ufat']];
// Imagen inicial.
const resultadoPrincipal = document.querySelector('.main-result');
const fragment = document.createDocumentFragment();

const crearImagenMunheco = document.createElement('img');
crearImagenMunheco.classList.add('imagen-munheco');
crearImagenMunheco.src = 'imagenes/Muñeco.png';
crearImagenMunheco.alt = 'imagen-munheco';

const p1 = document.createElement('p');
p1.classList.add('no-mensaje');
p1.textContent = 'Ningún mensaje fue encontrado';

const p2 = document.createElement('p');
p2.classList.add('ayuda');
p2.textContent = 'Ingresa el texto que desees encriptar o desencriptar';

const imagenMunheco = document.querySelector('.imagen-munheco');

function mostrarImagenInicial(){
    fragment.appendChild(crearImagenMunheco);
    fragment.appendChild(p1);
    fragment.appendChild(p2);
    resultadoPrincipal.appendChild(fragment);
}

mostrarImagenInicial();


// Mensaje encriptado o desencriptado.

const textareaEncriptacion = document.createElement('textarea');
textareaEncriptacion.classList.add('mensaje-encriptacion');
textareaEncriptacion.cols = 20;
textareaEncriptacion.rows = 8;

const crearBtnCopiar = document.createElement('button');
crearBtnCopiar.classList.add('copiar');
crearBtnCopiar.textContent = 'Copiar';


function eliminarImagenInicial(){
crearImagenMunheco.remove();
p1.remove();
p2.remove();
}

function mostrarContenedorDeEncriptado(){
    fragment.appendChild(textareaEncriptacion);
    fragment.appendChild(crearBtnCopiar);
    resultadoPrincipal.appendChild(fragment);
}

function eliminarContenedorEncriptado(){
    textareaEncriptacion.remove();
    crearBtnCopiar.remove();
}



function encriptar(mensaje){
    mensaje = mensaje.toLowerCase();
    for(let i = 0; i < criptologia.length; i++){
        if(mensaje.includes(criptologia[i][0])){
            mensaje = mensaje.replaceAll(criptologia[i][0],criptologia[i][1]);
        }
    }
    return mensaje;
}


function desencriptar(mensaje){
    mensaje = mensaje.toLowerCase();
    for(let i = 0; i < criptologia.length; i++){
        if(mensaje.includes(criptologia[i][1])){
            mensaje = mensaje.replaceAll(criptologia[i][1],criptologia[i][0]);
        }
    }
    return mensaje;
}


function copiarAlPortapapeles() {
    textareaEncriptacion.select();
    navigator.clipboard.writeText(textareaEncriptacion.value);
    alert('Texto copiado');
    textareaEncriptacion.innerHTML = ""
}


btnEncriptar.addEventListener("click",function(){
    eliminarImagenInicial();
    mostrarContenedorDeEncriptado();
    textareaEncriptacion.innerHTML = encriptar(textArea.value);
});


btnDesencriptar.addEventListener("click",function(){
    eliminarImagenInicial();
    mostrarContenedorDeEncriptado();
    textareaEncriptacion.innerHTML = desencriptar(textArea.value);
});



crearBtnCopiar.addEventListener("click",function(){
     copiarAlPortapapeles();
     eliminarContenedorEncriptado();
     mostrarImagenInicial();
});


