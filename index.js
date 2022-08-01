let desligar = document.getElementById("bnt_Desligar");
let lampada = document.getElementById("lampada");
let luzQuebrada = false;

function ligarLuz(){
    if(luzQuebrada == false){
        lampada.src = "img/ligada.jpg";
    }
}

function desligarLuz(){
    if(luzQuebrada == false){
        lampada.src = "img/desligada.jpg";
    }
}

function quebrarLuz(){
    lampada.src = "img/quebrada.jpg";
    luzQuebrada = true;
}

