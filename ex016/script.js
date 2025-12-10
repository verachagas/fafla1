
let numero = parseInt(prompt("Digite um número:"));


let resultado = "Tabuada de " + numero + ":\n\n";

for (let i = 1; i <= 10; i++) {
    resultado += numero + " x " + i + " = " + (numero * i) + "\n";
}


alert(resultado);
