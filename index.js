const btnEncriptar = document.querySelector('.encriptar');
const btnDesencriptar = document.querySelector('.desencriptar');
const textArea = document.querySelector('.texto');
const btnCopiar = document.querySelector('.copiar');
const resultado = document.querySelector('.mensaje-encriptacion');

const criptologia = [["e","enter"],['i','imes'],['a','ai'],['o','ober'],['u','ufat']];

const resultadoPrincipal = document.querySelector('.main-result');
const fragment = document.createDocumentFragment();

const imagenMunheco = document.createElement('img');
imagenMunheco.classList.add('imagen-munheco');
imagenMunheco.src = 'imagenes/Muñeco.png';
imagenMunheco.alt = 'imagen-munheco';

const p1 = document.createElement('p');
p1.classList.add('no-mensaje');
p1.textContent = 'Ningún mensaje fue encontrado';

const p2 = document.createElement('p');
p2.classList.add('ayuda');
p2.textContent = 'Ingresa el texto que desees encriptar o desencriptar';


fragment.appendChild(imagenMunheco);
fragment.appendChild(p1);
fragment.appendChild(p2);
resultadoPrincipal.appendChild(fragment);

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
    resultado.select();
    navigator.clipboard.writeText(resultado.value);
    alert('Texto copiado');
    resultado.innerHTML = ""
}


btnEncriptar.addEventListener("click",function(){
    resultado.innerHTML = encriptar(textArea.value);
});


btnDesencriptar.addEventListener("click",function(){
    resultado.innerHTML = desencriptar(textArea.value);
});

btnCopiar.addEventListener("click",function(){
    copiarAlPortapapeles();
});