const colores = ['', 'red', 'blue', 'green', 'orange'];
keys = document.getElementsByClassName('key')
let elementosDentro = []

for (var i = 0; i < keys.length; i++) {
    elementosDentro.push(keys[i].innerText)
    // Imprimir información sobre los elementos dentro de cada div
}


function changeColor(id) {
    let box = document.getElementById(id);
    let colorActual = box.style.backgroundColor;
    let siguienteColorIndex = colores.indexOf(colorActual) + 1;

    if (siguienteColorIndex === colores.length) {
        siguienteColorIndex = 0;
    }

    box.style.backgroundColor = colores[siguienteColorIndex];
}


function keymap(){
    let check = document.getElementById('check')
    if (check.checked == false){
        for (var i = 0; i < keys.length; i++){
            keys[i].innerText = ''
        }
    }
    else{
        for (var i = 0; i < keys.length; i++){
            keys[i].innerText = elementosDentro[i]
        }
    }
}