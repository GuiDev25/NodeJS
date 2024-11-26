const nome = "Pedro Guilherme";
let idade = 21;
let pesoKg = 80;
const alturaM = 1.7;
let imc = pesoKg/(alturaM**2);
let anoNascimento = 2024-idade;
console.log(`${nome} tem ${idade} anos e pesa ${pesoKg}kg. Tem ${alturaM}m e seu IMC é:${imc.toFixed(2)}`);