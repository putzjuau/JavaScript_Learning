//IIFE
function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault(); // retira todo padrao perante eventos do botao 
    const nome = form.querySelector(".nome"); //utilizando uma forma de pesquisa bem menor
    const sobrenome = form.querySelector(".sobrenome"); //utilizando uma forma de pesquisa bem menor
    const peso = form.querySelector(".peso"); //utilizando uma forma de pesquisa bem menor
    const altura = form.querySelector(".altura"); //utilizando uma forma de pesquisa bem menor

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });
    console.log(pessoas);

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p` 

    nome.value = "";
    sobrenome.value = "";
    peso.value = "";
    altura.value = "";
  }
  form.addEventListener("submit", recebeEventoForm);
}


meuEscopo();
