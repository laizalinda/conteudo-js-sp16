// Objetos

// Criando objetos com construtores
function Carro(marca, modelo, ano, quantidadeRodas, cor) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.quantidadeRodas = quantidadeRodas;
    this.cor = cor;
}

const carroLaiza = new Carro("Hyundai", "i30", 2012, 4, "preto");

const carroAzial = new Carro("Honda", "Civic SI", 2008, 4, "branco");



console.log(carroLaiza);
console.log(carroAzial);

carroLaiza.quilometragem = 80000;
carroAzial.aroRoda = 18;

console.log("");

console.log(carroLaiza);
console.log(carroAzial);

const carroLaiza = new Carro ("Honda", "Civic", 2002, 4, "vermelho");

console.log(carroLaiza);



