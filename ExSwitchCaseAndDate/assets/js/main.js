const h1 = document.querySelector(".container h1");

const data = new Date();

function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;
    switch(diaSemana){
        case 0: 
        diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
        case 1: 
        diaSemanaTexto = 'Segunda';
        return diaSemanaTexto;
        case 2: 
        diaSemanaTexto = 'Terça';
        return diaSemanaTexto;
        case 3: 
        diaSemanaTexto = 'Quarta';
        return diaSemanaTexto;
        case 4: 
        diaSemanaTexto = 'Quinta';
        return diaSemanaTexto;
        case 5: 
        diaSemanaTexto = 'Sexta';
        return diaSemanaTexto;
        case 6: 
        diaSemanaTexto = 'Sábado';
        return diaSemanaTexto;
        default: 
        diaSemanaTexto = '';
        return diaSemanaTexto;
    }
}
function getDiaMesTexto(MesTexto){
    let mesAnoTexto;
    switch(MesTexto){
        case 0: 
        mesAnoTexto = 'janeiro';
        return mesAnoTexto;
        case 1: 
        mesAnoTexto = 'fevereiro';
        return mesAnoTexto;
        case 2: 
        mesAnoTexto = 'marco';
        return mesAnoTexto;
        case 3: 
        mesAnoTexto = 'abril';
        return mesAnoTexto;
        case 4: 
        mesAnoTexto = 'maio';
        return mesAnoTexto;
        case 5: 
        mesAnoTexto = 'junho';
        return mesAnoTexto;
        case 6: 
        mesAnoTexto = 'julho';
        return mesAnoTexto;
        default: 
        mesAnoTexto = '';
        return mesAnoTexto;
    }
}

h1.innerHTML = getDiaSemanaTexto(`${data.getDay()}, ${data.getDate} de  `); 