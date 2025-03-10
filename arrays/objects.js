const criaPessoa = (nome, sobrenome, idade) => { //factory, pois retorna objetos
return {
        nome,
        sobrenome,
        idade,
        fala(){
            console.log(`A minha idade atual é: ${this.idade}`);
        },
        incrementaIdade(){
            ++this.idade;
        }
        
    }
};
const pessoa1 = criaPessoa('Luiz', 'Otavio', 28);
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();