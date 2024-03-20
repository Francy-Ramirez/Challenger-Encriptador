//selecciono todos los elementos//
const botonEncriptar = document.querySelector(".boton-encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const alerta = document.querySelector(".texto-alerta");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-contenedor");
const botonCopiar = document.querySelector(".boton-copiar");
const botonDesencriptar = document.querySelector(".boton-desencriptar");

//Botón Encriptar//
botonEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        alerta.style.background = "#0A3871";
        alerta.style.color = "#FFFF";
        alerta.style.fontweight = "800";
        alerta.textContent = "El campo de texto no debe estar vacío";

        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        alerta.style.background = "#0A3871";
        alerta.style.color = "#FFFF";
        alerta.style.fontweight = "800";
        alerta.textContent = "No debe tener acentos ni carácteres especiales";

        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        alerta.style.background = "#0A3871";
        alerta.style.color = "#FFFF";
        alerta.style.fontweight = "800";
        alerta.textContent = "Sólo letras minúsculas";

        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        contenido.remove();

    }

})

//Botón Desencriptar//
botonDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        alerta.style.background = "#0A3871";
        alerta.style.color = "#FFFF";
        alerta.style.fontweight = "800";
        alerta.textContent = "El campo de texto no debe estar vacío";

        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        alerta.style.background = "#0A3871";
        alerta.style.color = "#FFFF";
        alerta.style.fontweight = "800";
        alerta.textContent = "No debe tener acentos ni carácteres especiales";

        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        alerta.style.background = "#0A3871";
        alerta.style.color = "#FFFF";
        alerta.style.fontweight = "800";
        alerta.textContent = "Sólo letras minúsculas";

        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        contenido.remove();

    }

})

//Botón Copiar//
botonCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
});