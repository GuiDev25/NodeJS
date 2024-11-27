//Dados de entrada
const nome = "Teste nome";
let idade = 20; 
let pesoKg = 80;
const alturaM = 1.75;

//Calc IMC
let imc = pesoKg/(alturaM**2);

//Set Values for IMC
if (imc < 19.1) {
    console.log(`${nome} tem ${idade} anos e pesa ${pesoKg}kg. Tem ${alturaM}m e seu IMC é: ${imc.toFixed(2)} // IMC = Abaixo do peso`);
} else if (imc>=19.1 && imc<=25.8) {
    console.log(`${nome} tem ${idade} anos e pesa ${pesoKg}kg. Tem ${alturaM}m e seu IMC é: ${imc.toFixed(2)} // IMC = Normal`);
} else if(imc>=25.9 && imc<= 27.3){
    console.log(`${nome} tem ${idade} anos e pesa ${pesoKg}kg. Tem ${alturaM}m e seu IMC é: ${imc.toFixed(2)} // IMC = Pouco acima do peso`);
}else if(imc>=27.4 && imc<= 32.3){
    console.log(`${nome} tem ${idade} anos e pesa ${pesoKg}kg. Tem ${alturaM}m e seu IMC é: ${imc.toFixed(2)} // IMC = Acima do peso`);
}else{
    console.log(`${nome} tem ${idade} anos e pesa ${pesoKg}kg. Tem ${alturaM}m e seu IMC é: ${imc.toFixed(2)} // IMC = Obesidade`);
}