
let salario = parseFloat(prompt("Digite o valor do salário:"));


let bonus = parseFloat(prompt("Digite o valor do bônus:"));


let total = salario + bonus;

alert("O valor total com bônus é: R$ " + total.toFixed(2));
