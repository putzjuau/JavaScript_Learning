// const data = new Date();  // a, m , d, h, M, s, ms
// console.log(data.toString());

// const dataString = new Date("2000-04-20 20:20:20");
// console.log("Dia", dataString.getDate());
// console.log("Mes", dataString.getMonth() +1);
// console.log("Ano", dataString.getFullYear());
// console.log("Hora", dataString.getHours());
// console.log("Min", dataString.getMinutes());
// console.log("Seg", dataString.getSeconds());
// console.log("MiliSe", dataString.getMilliseconds());
// console.log(" Dia semaana", dataString.getDay());

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth()+1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());


    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}}`;
    
}

function zeroAEsquerda(num){
return num >= 10 ? num : `0${num}`;
}

const data = new Date();

const dataBrazil = formataData(data);
console.log(dataBrazil)