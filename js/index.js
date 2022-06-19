let tarjetaDestapadas=0;
let tarjeta1 = null;
let tarjeta2 = null;
let result1=null;
let result2=null;
let movimientos =0;
let acertadas =0;
let tiempo=false;
let timer=30;
let timpoStop = 30;
let Stoop=null;
``

let mov = document.querySelector(".movimientos");
let acert = document.querySelector(".acertadas");
let tiemp = document.querySelector(".tiempo");

let NumOrdenado=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
NumOrdenado = NumOrdenado.sort(()=>{return Math.random()-0.5})
console.log(NumOrdenado)


function contarTiempo(){
    Stoop = setInterval((
    )=>{
        timer--;
        tiemp.innerHTML=`Tiempo: ${timer}`;
        if(timer==0){
        clearInterval(Stoop)
        stopTarjetars()
        }
    },1000)
}

function stopTarjetars(){
    for(let i =0; i<=15; i++){
        let tarjertaStop=document.getElementById(i);
         tarjertaStop.innerHTML=NumOrdenado[i];
         tarjertaStop.disabled=true;
    }
}

function iniciaGame(id){
   if(tiempo == false){
    contarTiempo();
    tiempo=true;
    mov.innerHTML=`Movimiento: ${movimientos}`;
   }

    tarjetaDestapadas++;
    console.log(tarjetaDestapadas)

    if(tarjetaDestapadas == 1){
        tarjeta1 = document.getElementById(id)
        result1=NumOrdenado[id];
        tarjeta1.innerHTML=result1
        tarjeta1.disabled = true;
    }
    else if(tarjetaDestapadas == 2){
        tarjeta2 = document.getElementById(id)
        result2=NumOrdenado[id];
        tarjeta2.innerHTML=result2
        tarjeta2.disabled = true;
        movimientos++;
        mov.innerHTML=`Movimiento: ${movimientos}`;

        if(result1 == result2){
            tarjetaDestapadas = 0;
            acertadas++;
            acert.innerHTML=`Acertadas: ${acertadas}`;

            if(acertadas==8){
                clearInterval(Stoop)
                acert.innerHTML=`Acertadas: ${acertadas} Winner`;
                tiemp.innerHTML=`duraste: ${timpoStop-timer} segundos`;
                mov.innerHTML=`Mov: ${movimientos} realizados`;
            }
        }else{
            setTimeout(()=>{
                 tarjeta1.innerHTML="";
                 tarjeta2.innerHTML="";
                 tarjeta1.disabled = false;
                 tarjeta2.disabled = false;
                 tarjetaDestapadas = 0;
            },800);
        }
    }
}