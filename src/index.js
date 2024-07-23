let invoice = {
nome: "Kiko",
age: 32,
classeAtaque: {
    0: ["guerreiro","espada"],
    1: ["mago", "magia"],
    2: ["monge", "artes marciais"],
    3: ["ninja", "shuriken"]
    }
}

class heroi{
    constructor(classe, ataque){
        this.classe = classe
        this.ataque = ataque
    }
    escrever(){
        console.log(`O ${this.classe} atacou usando ${this.ataque} `)
    }
}
console.log(`O heroí ${invoice.nome}`)
console.log(`De idade ${invoice.age}`)
for (let index in invoice.classeAtaque){
    let [classe1, ataque1] = invoice.classeAtaque[index] 
    console.log(`Com a classe ${invoice.classeAtaque[index]}`)
}

