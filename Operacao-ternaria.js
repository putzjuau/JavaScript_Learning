// ? : 

const pontuacaoUsuario = 1999;

// condicao ? (valor para verdadeiro) : (valor para falso)
const nivelUsuario = pontuacaoUsuario >=1000 ? 'Usuario Vip' : 'Usuario normal';
console.log(nivelUsuario);
// em vez disso
// if(pontuacaoUsuario >= 1000){
//     console.log('usuario vip');
// }else{
//     console.log('nao é ')
// }

//setando um valor padrao para essa variavel
const corPreta = null;
const corPadrao = corPreta || 'preta';