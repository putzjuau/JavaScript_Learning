//Praticidade para extrair dados de arrays ou objetos em variaveis distintas 
//UTILIZANDO EM ARRAYS

// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

// const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;

// console.log(primeiroNumero, segundoNumero, terceiroNumero);
// console.log(resto);

//UTILIZANDO EM OBJECTS

const pessoa = {
    nome: 'luiz',
    sobrenome:'miranda',
    idade:30,
    endereco: {
        rua: 'av Brasil',
        numero: 320
    }
};
//esse aqui funciona por chave e n por identação 
const { sobrenome} = pessoa;
console.log (sobrenome)