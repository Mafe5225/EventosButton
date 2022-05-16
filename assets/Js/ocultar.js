function cambiarColor() {
    document.getElementById("btnBotton").style.backgroundColor = "#00DDF0";
    document.getElementById("btnBotton").style.color = "black";
}

function colorOriginal() {
    document.getElementById("btnBotton").style.backgroundColor = "";
    document.getElementById("btnBotton").style.color = "white";
}

function ocultar() {
    document.getElementById('ocultar').style.display = 'none';
    if (btnBotton.textContent == "Ocultar") {
        btnBotton.textContent = "Mostrar";
    }
}

function mostrar() {
    document.getElementById('ocultar').style.display = 'block';
    if (btnBotton.textContent == "Mostrar") {
        btnBotton.textContent = "Ocultar";
    }
}

function dobleFuncion() {
    if (btnBotton.textContent == "Mostrar") {
        mostrar();
    } else {
        ocultar();
    }
}


btnBotton.addEventListener("click", dobleFuncion);
btnBotton.addEventListener("mouseover", cambiarColor);
btnBotton.addEventListener("mouseout", colorOriginal);


texto.addEventListener("keypress", function(e) {
    respuestaUsuario.textContent += e.key;
    if(texto == OnKeyPress(ev, Enter)) {
        respuestaUsuario.textContent = "";
    }
})
// GODOY
// const boton = document.getElementById('agregar');
// const input = document.getElementById('elemento');
// const lista = document.getElementById('lista');

// input.onkeydown = function(e){
//     if(e.keyCode == 13){
//         boton.click()
//         console.log("Tecla ENTER")
//     }

// }

// function cantidadDeElementos(){
//     return document.querySelectorAll("#el").length
// }

// boton.addEventListener("click", function(){
//     const valorIngresado = input.value;
//     if(valorIngresado !== ""){
//         lista.innerHTML = lista.innerHTML + '<ul id="el">'+ input.value + '</ul>';

//     }
// }







// CÓDIGO DE LAS TECLAS
// function onKeyDownHandler(event) {

//     var codigo = event.which || event.keyCode;

//     console.log("Presionada: " + codigo);
     
//     if(codigo === 13){
//       console.log("Tecla ENTER");
//     }

//     if(codigo >= 65 && codigo <= 90){
//       console.log(String.fromCharCode(codigo));
//     }

     
// }
