// Objetos

// Exemplos de objeto simples
const carro = {
    marca: "Porche",
    modelo: 911,
    ano: 2022,
    acelerar: function () {
        return `${this.marca} ${this.modelo} acelerou Vrumm...`;
    },
};

console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.ano);
console.log(carro.acelerar());

console.log("");

const pessoa = {
    nome: "Laiza",
    idade: 24,
    altura: 1.68,
    registro: "11111111111",
    empregado: true,
    apresentar: function () {

        let alturaDecimal = this.altura;

        let infoEmpregado = (this.empregado === true)? "Sim" : "Não";

        // if (this.empregado === true) {
        //     infoEmpregado = "Sim";
        // } else {
        //     infoEmpregado = "Não";
        // }

        return `
        Meu nome é: ${this.nome}
        Minha altura é: ${alturaDecimal.toFixed(2)}
        E meu número de registro é: ${this.registro}
        Eu trabalho?: ${infoEmpregado}
        `;
    }
}

console.log(pessoa.apresentar());

document.getElementById("ex1").innerHTML = "Laiza Linda";

console.log(document);