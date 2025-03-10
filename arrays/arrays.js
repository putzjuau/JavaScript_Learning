//criando um array
const alunos = ['Luiz', 'Maria', 'João'];

//função para adicionar no final 
alunos.push("Luiza");
console.log('One: ',alunos);

//função para adicionar no inicio
alunos.unshift("Luiza");
console.log('Two: ', alunos);

//funcao que retira ultimo item 
alunos.pop();
console.log(`Three : ` , alunos);

//funcao que retira do comeco
alunos.shift();
console.log('Four: ', alunos);

//fatiar array
console.log(alunos.slice(0,2));