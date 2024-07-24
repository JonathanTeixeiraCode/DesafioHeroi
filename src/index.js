
class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        let ataque;
        switch(this.tipo){
            case "guerreiro":
                ataque = "espada";
                break;
                case "mago":
                    ataque = "magia";
                    break;
                    case "monge":
                        ataque = "artes marciais";
                        break;
                        case "ninja":
                            ataque = "shuriken";
                            break;
                            default:
                                    ataque = "espada";
        }
        console.log(`O ${this.tipo}, ${this.nome} de ${this.idade} anos, atacou usando ${ataque}`)
    }
}
let heroi = new Heroi("Blue", 32, "guerreiro");
let heroi1 = new Heroi("Pink", 32, "mago");
let heroi2 = new Heroi("Black", 32, "monge");
let heroi3 = new Heroi("Green", 32, "ninja");
heroi.atacar();
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
